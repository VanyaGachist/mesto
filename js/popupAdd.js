import Popup from "./popup.js";
import Card from "./card.js";

class PopupAdd extends Popup {
  constructor(popup) {
    super(popup);
    this._formElementForAddMenu = document.querySelector('.popup__form_type_with-image');
    this._nameInputForImage = this._formElementForAddMenu.querySelector('.popup__input_text_name-image');
    this._hrefInputForImage = this._formElementForAddMenu.querySelector('.popup__input_href-image');
    this._elementsContainer = document.querySelector('.element');
  }

  open() {
    super.openPopup();
  }

  close() {
    super.closePopup();
  }

  addCardsSubmit() {
    const name = this._nameInputForImage.value;
    const link = this._hrefInputForImage.value;
    const card = new Card(name, link);
    this._elementsContainer.prepend(card.getView());
    this._nameInputForImage.value = '';
    this._hrefInputForImage.value = '';
  }
}

export default PopupAdd;
