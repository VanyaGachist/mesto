// Класс с созданием карточек
class Card {
  constructor(title, image, templateSelector, handleCardClick) {
    this._templateSelector = templateSelector;
    this._title = title;
    this._image = image;
    this._handleCardClick = handleCardClick;
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
  _setEventToDeleteButton() {
    this._deleteButton.addEventListener('click', this._handleDeleteCard.bind(this));
  }

  // поставить лайк, (была добавлена проверка contains и evt.target)
  _setEventToAddLike() {
    this._likeButton.addEventListener('click', this._handleLikeToCard.bind(this));
  }


  //используя класс c PopupImage открываем попап с картинкой
  _setOpenImage() {
    this._imageCard.addEventListener('click', () => {
      this._handleCardClick(this._image, this._title);
    });
  }

  // удаление для слушателя
  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleLikeToCard() {
    this._likeButton.classList.toggle('element__button_color_black');
  }

  // возврат значения для общего пользования
  getView() {
    this._newCard = this._getTemplate();
    this._imageCard = this._newCard.querySelector('.element__image');
    this._deleteButton = this._newCard.querySelector('.element__trash');
    this._likeButton = this._newCard.querySelector('.element__button');

    this._setName();
    this._setImage();
    this._setEventToDeleteButton();
    this._setEventToAddLike();
    this._setOpenImage();

    return this._newCard;
  }
}

export default Card;
