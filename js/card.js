// Класс с созданием карточек

class Card {
  constructor(title, image) {
    this._title = title;
    this._image = image;
  }

  _getTemplate() {
    const cardTemplate = document.querySelector('#card__template')
    .content.querySelector('.element__item')
    .cloneNode(true);

    return cardTemplate;
  }

  _setName() {
    const nameCard = this._newCard.querySelector('.element__heading');
    nameCard.textContent = this._title;
  }

  _setImage() {
    const imageCard = this._newCard.querySelector('.element__image');
    imageCard.src = `${this._image}`;
    imageCard.setAttribute('alt', this._title);
  }

  _setEventToDeleteButton() {
    const deleteButton = this._newCard.querySelector('.element__trash');
    deleteButton.addEventListener('click', this._handleDeleteCard.bind(this));
  }

  _setEventToAddLike() {
    const heartButton = this._newCard.querySelector('.element__button');
    heartButton.addEventListener('click', this._handleAddLike.bind(this));
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  _handleAddLike() {
    this._newCard.classList.toggle('element__button_color_black');
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setName();
    this._setImage();
    this._setEventToDeleteButton();
    this._setEventToAddLike();

    return this._newCard;
  }
}

export default Card;
