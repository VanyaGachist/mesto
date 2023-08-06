const openEditMenuForProfile = document.querySelector('.profile__edit-button');
const closeEditMenuButton = document.querySelector('.popup__close_first');
const closeAddMenuButton = document.querySelector('.popup__close_second');
const editMenuPopup = document.querySelector('.popup_edit');
const addMenuPopup = document.querySelector('.popup_add');
const nameOfProfile = document.querySelector('.profile__heading');
const jobOfProfile = document.querySelector('.profile__subtitle');
const formElementForEditMenu = document.querySelector('.popup__form_type_with-name-and-job');
const nameInputForProfile = formElementForEditMenu.querySelector('.popup__input_text_name');
const jobInputForProfile = formElementForEditMenu.querySelector('.popup__input_text_after');
const openAddMenuButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.element');
const formElementForAddMenu = document.querySelector('.popup__form_type_with-image');
const nameInputForImage = formElementForAddMenu.querySelector('.popup__input_text_name-image');
const hrefInputForImage = formElementForAddMenu.querySelector('.popup__input_href-image');
const textForImage = document.querySelector('.popup__subtitle');
const fullScreanImagePopup = document.querySelector('.popup__image');
const openPopupWithFullScreanImage = document.querySelector('.popup_full');
const closePopupWithFullScreanImage = document.querySelector('.popup__close_third');
const cardsTemplate = document.querySelector('#card__template').content;
const createPopupButtonCard = document.querySelector('.popup__create');


function closePopupWithEscape(evt) {
  const opnPopup = document.querySelector('.popup_opened');
  if(evt.key === 'Escape' && opnPopup) {
    closePopup(opnPopup);
  }
}

function closePopupWithClickToZone(evt) {
  const popup = evt.currentTarget ;
  if(evt.target === popup) {
    closePopup(popup);
  }
}

function closePopup (popup) {
  popup.classList.remove('popup_opened');
  window.removeEventListener('keydown', closePopupWithEscape);
  popup.removeEventListener('click', closePopupWithClickToZone);
}

function openPopup (popup) {
  popup.classList.add('popup_opened');
  window.addEventListener('keydown', closePopupWithEscape);
  popup.addEventListener('click', closePopupWithClickToZone);
}

openEditMenuForProfile.addEventListener('click', function () {
  nameInputForProfile.value = nameOfProfile.textContent;
  jobInputForProfile.value = jobOfProfile.textContent;
  openPopup(editMenuPopup);
});

openAddMenuButton.addEventListener('click', function () {
  openPopup(addMenuPopup);
  disableSubmitButton(createPopupButtonCard, validationConfig);
});

closeEditMenuButton.addEventListener('click', function () {
  closePopup(editMenuPopup);
});

closeAddMenuButton.addEventListener('click', function () {
  closePopup(addMenuPopup);
});

function editProfileMenuSubmit (evt) {
  evt.preventDefault();
  nameOfProfile.textContent = nameInputForProfile.value;
  jobOfProfile.textContent = jobInputForProfile.value;
  closePopup(editMenuPopup);
}

formElementForEditMenu.addEventListener('submit', editProfileMenuSubmit);


const renderCards = (cardName, cardImage) => {
  const cardElement = cardsTemplate.querySelector('.element__item').cloneNode(true);
  const img = cardElement.querySelector('.element__image');
  const heading = cardElement.querySelector('.element__heading');
  heading.textContent = cardName;
  const heart = cardElement.querySelector('.element__button');
  const trash = cardElement.querySelector('.element__trash');
  img.src = `${cardImage}`;
  img.setAttribute('alt', heading.textContent);

  heart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_color_black');
  });

  trash.addEventListener('click', function(evt) {
    const item = evt.target.closest('.element__item');
    item.remove();
  });

  function openImage () {
    fullScreanImagePopup.src = cardImage;
    textForImage.textContent = heading.textContent;
    fullScreanImagePopup.setAttribute('alt', heading.textContent);
  }

  img.addEventListener('click', function () {
    openImage();
    openPopup(openPopupWithFullScreanImage);
  });

  return cardElement;
}

closePopupWithFullScreanImage.addEventListener('click', function () {
  closePopup(openPopupWithFullScreanImage);
});

initialCards.forEach(cards => {
  elementsContainer.append(renderCards(cards.name, cards.link));
});

function addCardsSubmit () {
  const name = nameInputForImage.value;
  const link = hrefInputForImage.value;
  elementsContainer.prepend(renderCards(name, link));
  nameInputForImage.value = '';
  hrefInputForImage.value = '';
}

formElementForAddMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addCardsSubmit();
  closePopup(addMenuPopup);
});

validationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

enableValidation(validationConfig);
