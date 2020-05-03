class User {
  constructor({ id, name, profileLink }) {
    /**
     * @var {string|number} id
     */
    this.id = id;

    /**
     * @var {string} name
     */
    this.name = name;

    /**
     * @var {string} profileLink
     */
    this.profileLink = profileLink;
  }
}

export default User;
