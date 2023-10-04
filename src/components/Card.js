class Card {
  constructor(data, userId, templateSelector, { handleCardClick, handleCardLike, handleCardDislike, handleDeleteApiCard }) {
    this._templateSelector = templateSelector;
    this._title = data.name;
    this._image = data.link;
    this._userId = userId;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._likes = data.likes;
    this._handleCardClick = handleCardClick;
    this._handleCardLike = handleCardLike;
    this._handleCardDislike = handleCardDislike;
    this._handleDeleteApiCard = handleDeleteApiCard;
  }

  _hideDeleteButton() {
    if(this._userId !== this._ownerId) {
      this._deleteButton.classList.add('element__trash_hide');
    } else {
      this._deleteButton.classList.remove('element__trash_hide');
    }
  }

  // счетчик лайков
  _likesCounter() {
    this._likeCounter.textContent = this._likes.length;
  }

  setLikeCounter(likes) {
    this._likes = likes;
    this._likesCounter();
  }

  _handleLikeToCard() {
    if(this._likeButton.classList.contains('element__button_color_black')) {
      this._handleCardDislike(this._id);
    } else {
      this._handleCardLike(this._id);
    }
  }

  addLike() {
    this._likeButton.classList.add('element__button_color_black');
  }

  removeLike() {
    this._likeButton.classList.remove('element__button_color_black');
  }

  _isLiked() {
    return this._likes.forEach((like) => {
      if(like._id === this._userId) {
        this.addLike();
      } else {
        this.removeLike();
      }
    })
  }

  // Возвращает template с стилизованными карточками
  _getTemplate() {
    const cardTemplate = document
    .querySelector(this._templateSelector)
    .content
    .querySelector('.element__item')
    .cloneNode(true);

  return cardTemplate;
  }

  // имя карточки
  _setName() {
    const nameCard = this._newCard.querySelector('.element__heading');
    nameCard.textContent = this._title;
  }


  //фотка карточки
  _setImage() {
    this._imageCard.src = this._image;
    this._imageCard.alt = this._title;
  }


  // удалить карточку
  _setDeleteEventListener() {
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteApiCard(this);
    });
  }

  _setLikeEventListener() {
    this._likeButton.addEventListener('click', this._handleLikeToCard.bind(this));
  }

  //используя класс c PopupImage открываем попап с картинкой
  _setImageClickEventListener() {
    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._image, this._title);
    });
  }

  // удаление для слушателя
  handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // возврат значения для общего пользования
  getView() {
    this._newCard = this._getTemplate();
    this._imageCard = this._newCard.querySelector('.element__image');
    this._deleteButton = this._newCard.querySelector('.element__trash');
    this._likeButton = this._newCard.querySelector('.element__button');
    this._likeCounter = this._newCard.querySelector('.element__counter');

    this._setName();
    this._setImage();
    this._setDeleteEventListener();
    this._setLikeEventListener();
    this._setImageClickEventListener();
    this._likesCounter();
    this._hideDeleteButton();
    this._isLiked();

    return this._newCard;
  }
}

export default Card;
