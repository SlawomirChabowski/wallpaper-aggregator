import { AppConfig } from '../config/AppConfig';
import Source from '../utils/enums/Source';
import setupUrl from '../utils/setupUrl';
import axios from 'axios';

axios.interceptors.request.use((config) => {
  config.headers.authorization = `Client-ID ${AppConfig.sources.unsplash.apiKey}`;

  return config;
});

class UnsplashService {
  constructor() {
    axios.interceptors.request.use(this.setupInterceptor);

    this.apiUrl = AppConfig.sources.unsplash.apiUrl;
    this.apiKey = AppConfig.sources.unsplash.apiKey;
    this.endpoints = { getImages: 'photos' };
  }

  getImages(page = 1) {
    return axios.get(setupUrl(`${this.apiUrl}/${this.endpoints.getImages}`, {
      per_page: 50,
      order_by: 'popular',
      page,
    })).then(res => res.data.map(i => this.mapData(i)));
  }

  mapData(image) {
    const source = Source.unsplash;
    const { id, width, height, downloads, description, tags } = image;
    const { name, link } = image.user;
    const siteUrl = image.links.html;
    const imageUrl = image.urls.raw;

    return {
      id,
      source,
      width,
      height,
      downloads,
      description,
      tags,
      siteUrl,
      imageUrl,
      user: {
        name,
        link,
      },
    };
  }
}

export default UnsplashService;
