import Popup from "./popup.js";

class PopupEdit extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._formElementForEditMenu = this._popup.querySelector('.popup__form_type_with-name-and-job');
    this._nameInputForProfile = this._formElementForEditMenu.querySelector('.popup__input_text_name');
    this._jobInputForProfile = this._formElementForEditMenu.querySelector('.popup__input_text_after');
    this._nameOfProfile = document.querySelector('.profile__heading');
    this._jobOfProfile = document.querySelector('.profile__subtitle');
  }

  openEditPopup() {
    this._nameInputForProfile.value = this._nameOfProfile.textContent;
    this._jobInputForProfile.value = this._jobOfProfile.textContent;
    super.open();
  }

  handleSubmitPopup() {
    this._nameOfProfile.textContent = this._nameInputForProfile.value;
    this._jobOfProfile.textContent = this._jobInputForProfile.value;
    super.close();
  }
}

export default PopupEdit;
