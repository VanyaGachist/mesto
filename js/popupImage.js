import Popup from "./popup.js";

class PopupImage extends Popup {
  constructor(popup) {
    super(popup);
    this._fullScreanImagePopup = document.querySelector('.popup__image');
    this._textForImage = document.querySelector('.popup__subtitle');
  }

  openImage(cardImage, cardHeading) {
    this._fullScreanImagePopup.src = cardImage;
    this._textForImage.textContent = cardHeading;
    super.openPopup();
  }

  closeImage() {
    super.closePopup();
  }
}

export default PopupImage;
