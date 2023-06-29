const menuOpen = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popupMain = document.querySelector('.popup');
const mainName = document.querySelector('.profile__heading');
const afterMain = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__buttons');
const nameInput = formElement.querySelector('.popup__name');
const jobInput = formElement.querySelector('.popup__after');

function togglePopup() {
  if (popupMain.classList.contains('popup_opened')) {
    popupMain.classList.remove('popup_opened');
  } else {
    popupMain.classList.add('popup_opened');
  }
}

menuOpen.addEventListener('click', function () {
  nameInput.value = mainName.textContent;
  jobInput.value = afterMain.textContent;
  togglePopup()
});

closeButton.addEventListener('click', togglePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();
  mainName.textContent = nameInput.value;
  afterMain.textContent = jobInput.value;
  togglePopup()
}

formElement.addEventListener('submit', handleFormSubmit);


