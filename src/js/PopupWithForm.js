import Popup from "./popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, submit) {
    super(popupSelector);
    this._submit = submit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
  }

  _getInputssValues() {
    const value = {};
    this._inputs.forEach(input => {
      value[input.name] = input.value;
    });
    return value;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
