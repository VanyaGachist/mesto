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

  // Загрузка информации о пользователе с сервера
  getInfo() {
    return fetch(this._url + '/users/me', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err)
    })
  }


  // Загрузка карточек с сервера
  getCards() {
    return fetch(this._url + '/cards', {
      method: 'GET',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err)
    })
  }

  // Редактирование профиля
  editProfile(name, about) {
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err)
    })
  }

  addCard(name, link) {
    return fetch(this._url + '/cards', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err)
    })
  }

  // Добавление новой карточки
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

  // Удаление карточки
  deleteCard(id) {
    return fetch(`${this._url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._ifcheck)
    .catch((err) => {
      console.log(err)
    })
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
}

export default Api;
