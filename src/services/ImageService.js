import UnsplashService from './UnsplashService';

/**
 * @typedef {object} AbstractImageService
 * @property {function(number): Promise<object[]>} getImages
 */

class ImageService {
  constructor() {
    /**
     * @var {AbstractImageService[]} services
     */
    this.services = [new UnsplashService()];
  }

  async getImages(page = 1) {
    return Promise.all(this.services.map(s => s.getImages(page)))
      .then(data => this.sortImagesByDate(data.flat()));
  }

  sortImagesByDate(images) {
    return images.sort((i1, i2) => i1.createdAt < i2.createdAt);
  }
}

export default ImageService;
