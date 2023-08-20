import Card from "./card.js";
import initialCards from "./initialCards.js";
import PopupAdd from "./popupAdd.js";
import PopupEdit from "./popupEdit.js";
import Validate from "./validateForm.js";
import validationConfig from "./validationConfig.js";

const openEditMenuForProfile = document.querySelector('.profile__edit-button');
const closeEditMenuButton = document.querySelector('.popup__close_first');
const closeAddMenuButton = document.querySelector('.popup__close_second');
const editMenuPopup = document.querySelector('.popup_edit');
const addMenuPopup = document.querySelector('.popup_add');
const formElementForEditMenu = document.querySelector('.popup__form_type_with-name-and-job');
const openAddMenuButton = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.element');
const formElementForAddMenu = document.querySelector('.popup__form_type_with-image');
const createPopupButtonCard = document.querySelector('.popup__create');
const editPopup = new PopupEdit(editMenuPopup);
const addPopup = new PopupAdd(addMenuPopup);
const validate = new Validate(validationConfig);

openEditMenuForProfile.addEventListener('click', function () {
  editPopup.open();
});

openAddMenuButton.addEventListener('click', function () {
  addPopup.open();
  validate.disableSubmitButton(createPopupButtonCard);
});

closeEditMenuButton.addEventListener('click', function () {
  editPopup.closePopup();
});

closeAddMenuButton.addEventListener('click', function () {
  addPopup.closePopup();
});

formElementForEditMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  editPopup.handleSubmitPopup();
});

initialCards.forEach(cards => {
  const card = new Card(cards.name, cards.link);
  elementsContainer.append(card.getView());
});

formElementForAddMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPopup.addCardsSubmit();
  addPopup.closePopup();
});

validate.enableValidation();
