// Класс с созданием карточек
import PopupImage from "./popupImage.js";

class Card {
  constructor(title, image, templateSelector) {
    this._templateSelector = templateSelector;
    this._title = title;
    this._image = image;
    this._popupImage = new PopupImage('.popup_full');
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
    const imageCard = this._newCard.querySelector('.element__image');
    imageCard.src = this._image;
    imageCard.alt = this._title;
  }


  // удалить карточку
  _setEventToDeleteButton() {
    const deleteButton = this._newCard.querySelector('.element__trash');
    deleteButton.addEventListener('click', this._handleDeleteCard.bind(this));
  }

  // поставить лайк, (была добавлена проверка contains и evt.target)
  _setEventToAddLike() {
    const heartButton = this._newCard.querySelector('.element__button');
    heartButton.addEventListener('click', () => {
      heartButton.classList.toggle('element__button_color_black');
    });
  }


  //используя класс c PopupImage открываем попап с картинкой
  _setOpenImage() {
    const img = this._newCard.querySelector('.element__image');
    img.addEventListener('click', () => {
      this._popupImage.openImage(this._image, this._title);
    });
  }

  // удаление для слушателя
  _handleDeleteCard() {
    this._newCard.remove();
    this._newCard = null;
  }

  // возврат значения для общего пользования
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
