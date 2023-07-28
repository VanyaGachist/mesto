function enableValidation (config) {
  const showInputError = (form, input) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorClass);
  }

  const hideInputError = (form, input) => {
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.classList.remove(config.errorClass);
  }

  const hasInvalidValue = (inputs) => {
    return inputs.some(input => !input.validity.valid);
  }

  const toogleButtonState = (inputs, button) => {
    if(hasInvalidValue(inputs)) {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    }
  }

  const isValid = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input);
    } else {
      hideInputError(form, input);
    }
  };

  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);

    toogleButtonState(inputs, button);

    inputs.forEach(input => {
      input.addEventListener('input', () => {
        isValid(form, input);
        toogleButtonState(inputs, button);
      });
    });
  }

  const forms = Array.from(document.querySelectorAll(config.formSelector));
  forms.forEach(form => {
    setEventListeners(form);
  });
}
