// Класс с созданием карточек
import PopupImage from "./popupImage.js";

class Card {
  constructor(title, image) {
    const openPopupWithFullScreanImage = document.querySelector('.popup_full');
    this._title = title;
    this._image = image;
    this._popupImage = new PopupImage(openPopupWithFullScreanImage);
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
    heartButton.addEventListener('click', (evt) => {
      if(evt.target.classList.contains('element__button')) {
        evt.target.classList.toggle('element__button_color_black');
      }
    });
  }

  _setOpenImage() {
    const img = this._newCard.querySelector('.element__image');
    img.src = this._image;
    img.setAttribute('alt', this._title);
    img.addEventListener('click', () => {
      this._popupImage.openImage(this._image, this._title);
    });
  }

  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  getView() {
    this._newCard = this._getTemplate();
    this._setName();
    this._setImage();
    this._setEventToDeleteButton();
    this._setEventToAddLike();
    this._setOpenImage();

    return this._newCard;
  }
}

export default Card;
