import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._button = this._form.querySelector('.popup__button');
  }

  _getInputsValues() {
    const values = {};
    this._inputs.forEach(input => {
      values[input.name] = input.value;
    });
    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._getInputsValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }

  renderSaveLoading(isLoading) {
    if(isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = 'Сохранить';
    }
  }

  renderCreateLoading(isLoading) {
    if(isLoading) {
      this._button.textContent = 'Создание...';
    } else {
      this._button.textContent = 'Сохранить';
    }
  }

  renderDeleteLoading(isLoading) {
    if(isLoading) {
      this._button.textContent = 'Удаление...';
    } else {
      this._button.textContent = 'Да...';
    }
  }
}

export default PopupWithForm;
