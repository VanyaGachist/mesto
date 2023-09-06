import Card from "./components/card.js";
import FormValidator from "./components/FormValidator.js";
import Section from "./components/Section.js";
import UserInfo from "./components/UserInfo.js";
import {
  validationConfig,
  initialCards,
  openEditMenuForProfile,
  openAddMenuButton,
  nameImage,
  hrefImage,
  nameInput,
  jobInput
} from './utils/constants.js';
import Popup from "./components/popup.js";
import PopupWithForm from "./components/PopupWithForm.js";
import './pages/index.css';
import PopupImage from "./components/popupImage.js";

const editPopup = new Popup('.popup_edit');
const addPopup = new Popup('.popup_add');
const validEdit = new FormValidator(validationConfig, '.popup__form_type_with-name-and-job');
const validAdd = new FormValidator(validationConfig, '.popup__form_type_with-image');
const userInfo = new UserInfo({
  profileTitleSelector: '.profile__heading',
  profileDescriptionSelector: '.profile__subtitle'
});
const popupWithImage = new PopupImage('.popup_full');
popupWithImage.setEventListeners();


function createCard (name, link) {
  const card = new Card(name, link, '#card__template', () => {
    popupWithImage.openImage(link, name);
  });
  const cardElem = card.getView();
  cardsSection.addItem(cardElem);
}

openEditMenuForProfile.addEventListener('click', () => {
  const { name, jobName } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = jobName;
  editPopup.open();
  validEdit.disableSubmitButton();
});

const cardsSection = new Section({
  data: initialCards,
  renderer: (item) => {
    createCard(item.name, item.link);
  }
}, '.element');

cardsSection.render();

const editPopupForm = new PopupWithForm('.popup_edit', () => {
  userInfo.setUserInfo({
    name: nameInput.value,
    jobName: jobInput.value
  });
  editPopupForm.close();
});

editPopupForm.setEventListeners();

const addPopupForm = new PopupWithForm('.popup_add', () => {
  createCard(nameImage.value, hrefImage.value);
  addPopupForm.close();
});

addPopupForm.setEventListeners();


openAddMenuButton.addEventListener('click', function () {
  addPopup.open();
  validAdd.disableSubmitButton();
});

validEdit.enableValidation();
validAdd.enableValidation();
