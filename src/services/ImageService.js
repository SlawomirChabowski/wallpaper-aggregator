import UnsplashService from './UnsplashService';
import PixabayService from './PixabayService';

/**
 * @typedef {object} AbstractImageService
 * @property {function(number): Promise<object[]>} getImages
 */

class ImageService {
  constructor() {
    /**
     * @var {AbstractImageService[]} services
     */
    this.services = [
      new UnsplashService(),
      new PixabayService(),
    ];
  }

  async getImages(page = 1) {
    return Promise.all(this.services.map(s => s.getImages(page)))
      .then(data => data.flat());
  }
}

export default ImageService;
