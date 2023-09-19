import Card from "./components/Card.js";
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
  jobInput,
  openAvatarMenuButton,
  avatarInput
} from './utils/constants.js';
import PopupWithForm from "./components/PopupWithForm.js";
import './pages/index.css';
import PopupImage from "./components/PopupImage.js";
import Api from "./components/Api.js";

const validEdit = new FormValidator(validationConfig, '.popup__form_type_with-name-and-job');
const validAdd = new FormValidator(validationConfig, '.popup__form_type_with-image');
const validAvatar = new FormValidator(validationConfig, '.popup__form_type_with-avatar');
const userInfo = new UserInfo({
  profileTitleSelector: '.profile__heading',
  profileDescriptionSelector: '.profile__subtitle',
  profileAvatarSelector: '.profile__image'
});
const popupWithImage = new PopupImage('.popup_full');
popupWithImage.setEventListeners();

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-75',
  headers: {
    authorization: 'c2e6f64d-1b05-44dc-9a59-04ffc967ba64',
    'Content-Type': 'application/json'
  }
})

function createCard (name, link) {
  const card = new Card(name, link, '#card__template', () => {
    popupWithImage.openImage(link, name);
  })

  return card.getView();
}

openEditMenuForProfile.addEventListener('click', () => {
  api.getUserInfo()
  .then(() => {
    const { name, jobName } = userInfo.getUserInfo();
    nameInput.value = name;
    jobInput.value = jobName;
    editPopupForm.open();
    validEdit.disableSubmitButton();
  })
  .catch((err) => {
    console.log(err);
  })
});

openAvatarMenuButton.addEventListener('click', () => {
  validAvatar.disableSubmitButton();
  avatarPopupForm.open();
});

const cardsSection = new Section({
  data: initialCards,
  renderer: (item) => {
    const cardElem = createCard(item.name, item.link);
    cardsSection.addItem(cardElem);
  }
}, '.element');

api.getAllCards()
  .then(() => {
    cardsSection.render();
  })
  .catch((err) => {
    console.log(err);
  })

const editPopupForm = new PopupWithForm('.popup_edit', (data) => {
  editPopupForm.renderSaveLoading(true);
  api.setUserInfo({
    name: data[nameInput.name],
    jobName: data[jobInput.name]
  })
  .then(() => {
    userInfo.setUserInfo({
      name: data[nameInput.name],
      jobName: data[jobInput.name]
    });
    editPopupForm.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    setTimeout(() => {
      editPopupForm.renderSaveLoading(false);
    }, 1500)
  })
});

editPopupForm.setEventListeners();

const addPopupForm = new PopupWithForm('.popup_add', (data) => {
  addPopupForm.renderCreateLoading(true)
  api.setNewCard({
    name: data[nameImage.name],
    link: data[hrefImage.name]
  })
  .then(() => {
    const isMain = true;
    const cardElem = createCard(data[nameImage.name], data[hrefImage.name], isMain);
    cardsSection.addItem(cardElem);
    validAdd.disableSubmitButton();
    addPopupForm.close();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    setTimeout(() => {
      addPopupForm.renderCreateLoading(false);
    }, 1500)
  });
});

const avatarPopupForm = new PopupWithForm('.popup_avatar', (data) => {
  avatarPopupForm.renderSaveLoading(true);
  api.changeAvatar({
    avatar: data[avatarInput.name]
  })
  .then(() => {
    const avatarImage = {avatar: avatarInput.value}
    userInfo.setNewAvatar(avatarImage);
    avatarPopupForm.close();
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => {
    avatarPopupForm.renderSaveLoading(false);
  });
});

avatarPopupForm.setEventListeners();


addPopupForm.setEventListeners();


openAddMenuButton.addEventListener('click', function () {
  addPopupForm.open();
  validAdd.disableSubmitButton();
});

validEdit.enableValidation();
validAdd.enableValidation();
validAvatar.enableValidation();
