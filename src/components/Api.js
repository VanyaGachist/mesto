class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _ifcheck(res) {
    if(res.ok) {
      return res.json()
    }
    throw new Error('ошибка!')
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  setUserInfo(info) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: info.name,
        jobName: info.jobName
      })
    })
    .then(this._ifcheck)
    .catch((err) => {
        console.log(err);
    });
  }

  getAllCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  setEditProfile() {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  setNewCard(cards) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: cards.name,
        link: cards.link
      })
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  addLiked(id) {
    return fetch(this._url + `/cards/${id}likes/`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  deleteLike(id) {
    return fetch(this._url + `/cards/${id}likes/`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  changeAvatar(data) {
    return fetch(this._url + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: data.avatar
      })
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err);
    });
  }

  deleteCard(id) {
    return fetch(this._url + `/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._ifcheck)
      .catch((err) => {
        console.log(err);
      });
  }
}

export default Api;
