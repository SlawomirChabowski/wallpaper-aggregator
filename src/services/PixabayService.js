import axios from 'axios';
import { AppConfig } from '../config/AppConfig';
import setupUrl from '../utils/setupUrl';
import Source from '../utils/enums/Source';

axios.interceptors.request.use((config) => {
  config.url = setupUrl(config.url, { key: AppConfig.sources.pixabay.apiKey });
  config.headers = {
    ...config.headers,
    'Access-Control-Allow-Origin': '*',
  };

  return config;
});

class PixabayService {
  constructor() {
    axios.interceptors.request.use(this.setupInterceptor);

    this.apiUrl = AppConfig.sources.pixabay.apiUrl;
  }

  // getImages(page = 1) {
  //   return axios.get(setupUrl(this.apiUrl, { per_page: 50, order: 'popular', page }))
  //     .then(res => res.data.hits.map(i => this.mapData(i)));
  // }

  getImages(page = 1) {
    return fetch(setupUrl(this.apiUrl, { per_page: 50, order: 'popular', page, key: AppConfig.sources.pixabay.apiKey }))
      .then(res => res.json())
      .then(data => data.hits.map(i => this.mapData(i)));
  }

  mapData(image) {
    const source = Source.pixabay;
    const {
      id,
      downloads,
      tags,
      user_id,
      imageHeight: height,
      imageWidth: width,
      user: userName,
      pageURL: siteUrl,
      largeImageURL: imageUrl,
    } = image;

    return {
      id,
      source,
      width,
      height,
      downloads,
      tags,
      siteUrl,
      imageUrl,
      user: {
        name: userName,
        link: `https://pixabay.com/users/${userName}-${user_id}`,
      },
    };
  }
}

export default PixabayService;
