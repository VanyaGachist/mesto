class UserInfo {
  constructor({ profileTitleSelector, profileDescriptionSelector, profileAvatarSelector }) {
    this._title = document.querySelector(profileTitleSelector);
    this._description = document.querySelector(profileDescriptionSelector);
    this._avatar = document.querySelector(profileAvatarSelector);
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

  setNewAvatar({ avatar }) {
    this._avatar.src = avatar;
  }
}

export default UserInfo;
