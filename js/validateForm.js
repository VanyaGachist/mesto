// Класс с проверкой на валидацию

class Validate {
  constructor(config) {
    this._config = config;
  }

  enableValidation() {
    const forms = Array.from(document.querySelectorAll(this._config.formSelector));
  forms.forEach(form => {
    this._setEventListeners(form);
  });
  }

  _showInputError(form, input) {
    input.classList.add(this._config.inputErrorClass);
    const span = form.querySelector('.popup__error-' + input.id);
    span.textContent = input.validationMessage;
    span.classList.add(this._config.errorClass);
  }

  _hideInputError(form, input) {
    input.classList.remove(this._config.inputErrorClass);
    const span = form.querySelector('.popup__error-' + input.id);
    span.textContent = input.validationMessage;
    span.classList.add(this._config.errorClass);
  }

  _hasInvalidValue(inputs) {
    return inputs.some(input => !input.validity.valid);
  }

  _enableSubmitButton (button) {
    button.classList.remove(this._config.inactiveButtonClass);
    button.disabled = false;
  }

  disableSubmitButton(button) {
    button.classList.add(this._config.inactiveButtonClass);
    button.disabled = true;
  }

  _toogleButtonState(inputs, button) {
    if(this._hasInvalidValue(inputs)) {
      this.disableSubmitButton(button, this._config);
    } else {
      this._enableSubmitButton(button, this._config);
    }
  }

  _isValid(form, input) {
    if (!input.validity.valid) {
      this._showInputError(form, input);
    } else {
      this._hideInputError(form, input);
    }
  }

  _setEventListeners(form) {
    const inputs = Array.from(form.querySelectorAll(this._config.inputSelector));
    const button = form.querySelector(this._config.submitButtonSelector);

    this._toogleButtonState(inputs, button);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        this._isValid(form, input);
        this._toogleButtonState(inputs, button);
      });
    });

  }
}

export default Validate;
