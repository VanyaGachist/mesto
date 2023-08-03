function enableValidation (config) {
  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    setEventListeners(form, config);
  });
}

function showInputError(form, input, config) {
  input.classList.add(config.inputErrorClass);
  const span = form.querySelector('.popup__error-' + input.id);
  span.textContent = input.validationMessage;
  span.classList.add(config.errorClass);
}

function hideInputError(form, input, config) {
  input.classList.remove(config.inputErrorClass);
  const span = form.querySelector('.popup__error-' + input.id);
  span.textContent = '';
  span.classList.remove(config.errorClass);
}

function hasInvalidValue(inputs) {
  return inputs.some(input => !input.validity.valid);
}

function enableSubmitButton (button, config) {
  button.classList.remove(config.inactiveButtonClass);
  button.disabled = false;
}

function disableSubmitButton (button, config) {
  button.classList.add(config.inactiveButtonClass);
  button.disabled = true;
}

function toogleButtonState(inputs, button, config)  {
  if(hasInvalidValue(inputs)) {
    disableSubmitButton(button, config);
  } else {
    enableSubmitButton(button, config);
  }
}

function isValid(form, input, config) {
  if (!input.validity.valid) {
    showInputError(form, input, config);
  } else {
    hideInputError(form, input, config);
  }
};

function setEventListeners(form, config) {
  const inputs = Array.from(form.querySelectorAll(config.inputSelector));
  const button = form.querySelector(config.submitButtonSelector);

  toogleButtonState(inputs, button, config);

  inputs.forEach(input => {
    input.addEventListener('input', () => {
      isValid(form, input, config);
      toogleButtonState(inputs, button, config);
    });
  });
}
