import { AppConfig } from '../config/AppConfig';
import Source from '../utils/enums/Source';
import setupUrl from '../utils/setupUrl';
import axios from 'axios';

class UnsplashService {
  constructor() {
    axios.interceptors.request.use(this.setupInterceptor);

    this.apiUrl = AppConfig.sources.unsplash.apiUrl;
    this.apiKey = AppConfig.sources.unsplash.apiKey;
    this.endpoints = { getImages: 'photos' };
  }

  getImages(page = 1) {
    return axios.get(setupUrl(`${this.apiUrl}/${this.endpoints.getImages}`, {
      per_page: 100,
      order_by: 'popular',
      page,
    })).then(res => res.data.map(i => this.mapData(i)));
  }

  mapData(image) {
    const source = Source.unsplash;
    const { id, created_at, width, height, downloads, description, tags } = image;
    const { name, link: userLink } = image.user;
    const link = image.links.html;
    const url = image.urls.raw;

    return {
      id,
      source,
      createdAt: new Date(created_at),
      width,
      height,
      downloads,
      description,
      tags,
      link,
      url,
      user: {
        name,
        link: userLink,
      },
    };
  }

  setupInterceptor(config) {
    config.headers.authorization = `Client-ID ${AppConfig.sources.unsplash.apiKey}`;

    return config;
  }
}

export default UnsplashService;
