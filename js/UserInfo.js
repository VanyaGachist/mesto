class UserInfo {
  constructor({ profileTitle, profileDescription }) {
    this._title = document.querySelector(profileTitle);
    this._description = document.querySelector(profileDescription);
  }

  setUserInfo({ name, jobName }) {
    this._title.textContent = name;
    this._description.textContent = jobName;
  }

  getUserInfo() {
    return {
      name: this._title,
      jobName: this._description
    };
  }
}

export default UserInfo;
