import Popup from "./Popup.js";

class PopupImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._fullScreanImagePopup = this._popup.querySelector('.popup__image');
    this._textForImage = this._popup.querySelector('.popup__subtitle');
  }

  openImage(cardImage, cardHeading) {
    this._fullScreanImagePopup.src = cardImage;
    this._fullScreanImagePopup.setAttribute('alt', cardHeading);
    this._textForImage.textContent = cardHeading;
    super.open();
  }
}

export default PopupImage;
