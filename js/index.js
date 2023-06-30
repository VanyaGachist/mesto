const menuOpen = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close');
const popupMain = document.querySelector('.popup');
const mainName = document.querySelector('.profile__heading');
const afterMain = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__buttons');
const nameInput = formElement.querySelector('.popup__input_text_name');
const jobInput = formElement.querySelector('.popup__input_text_after');

function openPopup () {
  popupMain.classList.add('popup_opened');
}

function closePopup () {
  popupMain.classList.remove('popup_opened');
}

menuOpen.addEventListener('click', function () {
  nameInput.value = mainName.textContent;
  jobInput.value = afterMain.textContent;
  openPopup()
});

closeButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();
  mainName.textContent = nameInput.value;
  afterMain.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);
