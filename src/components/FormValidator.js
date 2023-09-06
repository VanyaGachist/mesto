// Класс с проверкой на валидацию

class FormValidator {
  constructor(config, formSelector) {
    this._form = document.querySelector(formSelector);
    this._config = config;
    this._inputs = Array.from(this._form.querySelectorAll(this._config.inputSelector));
    this._button = this._form.querySelector(this._config.submitButtonSelector);
  }

  enableValidation() {
    this._setEventListeners();
  }

  _showInputError(input) {
    input.classList.add(this._config.inputErrorClass);
    const span = this._form.querySelector('.popup__error-' + input.id);
    span.textContent = input.validationMessage;
    span.classList.add(this._config.errorClass);
  }

  _hideInputError(input) {
    input.classList.remove(this._config.inputErrorClass);
    const span = this._form.querySelector('.popup__error-' + input.id);
    span.textContent = input.validationMessage;
    span.classList.remove(this._config.errorClass);
  }

  _hasInvalidValue() {
    return this._inputs.some(input => !input.validity.valid);
  }

  _enableSubmitButton () {
    this._button.classList.remove(this._config.inactiveButtonClass);
    this._button.disabled = false;
  }

  disableSubmitButton() {
    this._button.classList.add(this._config.inactiveButtonClass);
    this._button.disabled = true;

    return this._button;
  }

  _toogleButtonState() {
    if(this._hasInvalidValue()) {
      this.disableSubmitButton();
    } else {
      this._enableSubmitButton();
    }
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _setEventListeners() {
    this._toogleButtonState();

    this._inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(input);
        this._toogleButtonState();
      });
    });

  }
}

export default FormValidator;


