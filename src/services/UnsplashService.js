import { AppConfig } from '../config/AppConfig';
import Source from '../utils/enums/Source';
import setupUrl from '../utils/setupUrl';
import axios from 'axios';
import Image from '../models/Image';
import User from '../models/User';

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Client-ID ${AppConfig.sources.unsplash.apiKey}`;

  return config;
});

class UnsplashService {
  constructor() {
    this.apiUrl = AppConfig.sources.unsplash.apiUrl;
    this.apiKey = AppConfig.sources.unsplash.apiKey;
    this.endpoints = { getImages: 'photos' };
  }

  /**
   * @param {number} page
   * @returns {Promise<Image[]>}
   */
  getImages(page = 1) {
    return axios.get(setupUrl(`${this.apiUrl}/${this.endpoints.getImages}`, {
      per_page: 50,
      order_by: 'popular',
      page,
    })).then(res => res.data.map(i => this.mapData(i)));
  }

  /**
   * @param {object} responseImg
   * @returns {Image[]}
   */
  mapData(responseImg) {
    const { id, width, height, downloads, tags } = responseImg;
    const { user_id, name, link } = responseImg.user;
    const siteUrl = responseImg.links.html;
    const imageUrl = responseImg.urls.raw;

    return new Image({
      source: Source.unsplash,
      id,
      width,
      height,
      downloads,
      tags,
      siteUrl,
      imageUrl,
      user: new User({
        id: user_id,
        profileLink: link,
        name,
      }),
    });
  }
}

export default UnsplashService;
