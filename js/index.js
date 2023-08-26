import Card from "./card.js";
import initialCards from "./initialCards.js";
import PopupAdd from "./popupAdd.js";
import PopupEdit from "./popupEdit.js";
import FormValidator from "./FormValidator.js";
import validationConfig from "./validationConfig.js";

const openEditMenuForProfile = document.querySelector('.profile__edit-button');
const closeEditMenuButton = document.querySelector('.popup__close_first');
const closeAddMenuButton = document.querySelector('.popup__close_second');
const formElementForEditMenu = document.querySelector('.popup__form_type_with-name-and-job');
const openAddMenuButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.element');
const formElementForAddMenu = document.querySelector('.popup__form_type_with-image');
const createPopupButtonCard = document.querySelector('.popup__create');
const editPopup = new PopupEdit('.popup_edit');
const addPopup = new PopupAdd('.popup_add');
const validEdit = new FormValidator(validationConfig, '.popup__form_type_with-name-and-job');
const validAdd = new FormValidator(validationConfig, '.popup__form_type_with-image');


openEditMenuForProfile.addEventListener('click', () => {
  editPopup.openEditPopup();
  validEdit.disableSubmitButton();
});

openAddMenuButton.addEventListener('click', function () {
  addPopup.open();
  validAdd.disableSubmitButton();
});

closeEditMenuButton.addEventListener('click', function () {
  editPopup.close();
});

closeAddMenuButton.addEventListener('click', function () {
  addPopup.close();
});

formElementForEditMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  editPopup.handleSubmitPopup();
});

initialCards.forEach(cards => {
  const card = new Card(cards.name, cards.link, '#card__template');
  elementsContainer.append(card.getView());
});

formElementForAddMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPopup.addCardsSubmit();
  addPopup.close();
});

validEdit.enableValidation();
validAdd.enableValidation();


