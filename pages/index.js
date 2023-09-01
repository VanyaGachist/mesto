import Card from "../js/card.js";
import PopupAdd from "../js/popupAdd.js";
import FormValidator from "../js/FormValidator.js";
import Section from "../js/Section.js";
import UserInfo from "../js/UserInfo.js";
import {
  validationConfig,
  initialCards,
  openEditMenuForProfile,
  openAddMenuButton,
  closeAddMenuButton,
  closeEditMenuButton,
  formElementForAddMenu,
  formElementForEditMenu
} from '../utils/constants.js';
import Popup from "../js/popup.js";

const editPopup = new Popup('.popup_edit');
const addPopup = new Popup('.popup_add');
const validEdit = new FormValidator(validationConfig, '.popup__form_type_with-name-and-job');
const validAdd = new FormValidator(validationConfig, '.popup__form_type_with-image');
const userInfo = new UserInfo({
  profileTitle: '.profile__heading',
  profileDescription: '.profile__subtitle'
});

openEditMenuForProfile.addEventListener('click', () => {
  editPopup.open();
  const user = userInfo.getUserInfo();
  const nameInput = document.querySelector('.popup__input_text_name');
  const jobInput = document.querySelector('.popup__input_text_after');
  nameInput.value = user.name.textContent;
  jobInput.value = user.jobName.textContent;
});

closeEditMenuButton.addEventListener('click', () => {
  editPopup.close();
});

formElementForEditMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const nameInput = document.querySelector('.popup__input_text_name');
  const jobInput = document.querySelector('.popup__input_text_after');
  userInfo.setUserInfo({
    name: nameInput.value,
    jobName: jobInput.value
  });
  editPopup.close();
});

openAddMenuButton.addEventListener('click', function () {
  addPopup.open();
  validAdd.disableSubmitButton();
});

closeAddMenuButton.addEventListener('click', function () {
  addPopup.close();
});

const renderCards = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#card__template');
    const cardElem = card.getView();
    renderCards.addItem(cardElem);
  }
}, '.element');

formElementForAddMenu.addEventListener('submit', (evt) => {
  evt.preventDefault();
  addPopup.addCardsSubmit();
  addPopup.close();
});

renderCards.render();

validEdit.enableValidation();
validAdd.enableValidation();


