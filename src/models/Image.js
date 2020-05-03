class Image {
  constructor({ id, source, width, height, downloads, tags, siteUrl, imageUrl, user }) {
    /**
     * @var {string|number} id
     */
    this.id = id;

    /**
     * @var {Source}
     */
    this.source = source;

    /**
     * @var {number} width
     */
    this.width = width;

    /**
     * @var {number} height
     */
    this.height = height;

    /**
     * @var {number} downloads
     */
    this.downloads = downloads;

    /**
     * @var {number} tags
     */
    this.tags = tags;

    /**
     * @var {string} siteUrl
     */
    this.siteUrl = siteUrl;

    /**
     * @var {string} imageUrl
     */
    this.imageUrl = imageUrl;

    /**
     * @var {User} user
     */
    this.user = user;
  }
}

export default Image;
