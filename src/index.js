import Card from "./js/card.js";
import FormValidator from "./js/FormValidator.js";
import Section from "./js/Section.js";
import UserInfo from "./js/UserInfo.js";
import {
  validationConfig,
  initialCards,
  openEditMenuForProfile,
  openAddMenuButton,
  nameImage,
  hrefImage
} from './utils/constants.js';
import Popup from "./js/popup.js";
import PopupWithForm from "./js/PopupWithForm.js";
import './pages/index.css';


const editPopup = new Popup('.popup_edit');
const addPopup = new Popup('.popup_add');
const validEdit = new FormValidator(validationConfig, '.popup__form_type_with-name-and-job');
const validAdd = new FormValidator(validationConfig, '.popup__form_type_with-image');
const userInfo = new UserInfo({
  profileTitle: '.profile__heading',
  profileDescription: '.profile__subtitle'
});

openEditMenuForProfile.addEventListener('click', () => {
  const nameInput = document.querySelector('.popup__input_text_name');
  const jobInput = document.querySelector('.popup__input_text_after');
  const { name, jobName } = userInfo.getUserInfo();
  nameInput.value = name.textContent;
  jobInput.value = jobName.textContent;
  editPopup.open();
  validEdit.disableSubmitButton();
});

const renderCards = new Section({
  data: initialCards,
  renderer: (item) => {
    const card = new Card(item.name, item.link, '#card__template');
    const cardElem = card.getView();
    renderCards.addItem(cardElem);
  }
}, '.element');

renderCards.render();

const editPopupForm = new PopupWithForm('.popup_edit', () => {
  const nameInput = document.querySelector('.popup__input_text_name');
  const jobInput = document.querySelector('.popup__input_text_after');
  userInfo.setUserInfo({
    name: nameInput.value,
    jobName: jobInput.value
  });
  editPopupForm.close();
});

editPopupForm.setEventListeners();

const addPopupForm = new PopupWithForm('.popup_add', () => {
  const card = new Card(nameImage.value, hrefImage.value, '#card__template');
  const cardElem = card.getView();
  renderCards.addItem(cardElem);
  addPopupForm.close();
});

addPopupForm.setEventListeners();


openAddMenuButton.addEventListener('click', function () {
  addPopup.open();
  validAdd.disableSubmitButton();
});

validEdit.enableValidation();
validAdd.enableValidation();
