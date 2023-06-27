const menuOpen = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popupMain = document.querySelector('.popup');
const mainName = document.querySelector('.profile__heading');
const inputName = document.querySelector('.popup__name');
const afterMain = document.querySelector('.profile__subtitle');
const inputAfter = document.querySelector('.popup__after');
const buttonSave = document.querySelector('.popup__save');

function togglePopup () {
  popupMain.classList.toggle('popup__opened');
}

menuOpen.addEventListener('click', togglePopup);

closeButton.addEventListener('click', function () { // закрываю и введеные значения которые не сохранились удаляются
  inputName.value = mainName.textContent;
  inputAfter.value = afterMain.textContent;
  togglePopup()
});

inputName.value = mainName.textContent;
inputAfter.value = afterMain.textContent;

buttonSave.addEventListener('click', function() { // кнопка сохранить значение введенное
  if (inputName.value !== mainName.textContent) {
    mainName.textContent = inputName.value;
  }

  if (inputAfter.value !== afterMain.textContent) {
    afterMain.textContent = inputAfter.value;
  }
});



