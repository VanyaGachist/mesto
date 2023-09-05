class UserInfo {
  constructor({ profileTitleSelector, profileDescriptionSelector }) {
    this._title = document.querySelector(profileTitleSelector);
    this._description = document.querySelector(profileDescriptionSelector);
  }

  setUserInfo({ name, jobName }) {
    this._title.textContent = name;
    this._description.textContent = jobName;
  }

  getUserInfo() {
    return {
      name: this._title.textContent,
      jobName: this._description.textContent
    };
  }
}

export default UserInfo;
