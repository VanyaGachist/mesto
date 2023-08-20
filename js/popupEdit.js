import Popup from "./popup.js";

class PopupEdit extends Popup {
  constructor(popup) {
    super(popup);
    this._formElementForEditMenu = document.querySelector('.popup__form_type_with-name-and-job');
    this._nameInputForProfile = this._formElementForEditMenu.querySelector('.popup__input_text_name');
    this._jobInputForProfile = this._formElementForEditMenu.querySelector('.popup__input_text_after');
    this._nameOfProfile = document.querySelector('.profile__heading');
    this._jobOfProfile = document.querySelector('.profile__subtitle');
  }

  open() {
    this._nameInputForProfile.value = this._nameOfProfile.textContent;
    this._jobInputForProfile.value = this._jobOfProfile.textContent;
    super.openPopup();
  }

  close() {
    super.closePopup();
  }

  handleSubmitPopup(evt) {
    this._nameOfProfile.textContent = this._nameInputForProfile.value;
    this._jobOfProfile.textContent = this._jobInputForProfile.value;
    super.closePopup();
  }
}

export default PopupEdit;
