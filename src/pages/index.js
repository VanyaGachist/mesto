import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import {
  validationConfig,
  openEditMenuForProfile,
  openAddMenuButton,
  nameImage,
  hrefImage,
  nameInput,
  jobInput,
  openAvatarMenuButton,
  avatarInput
} from '../utils/constants.js';
import PopupWithForm from "../components/PopupWithForm.js";
import './index.css';
import PopupImage from "../components/PopupImage.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

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
let userId;

const popupDelete = new PopupWithConfirmation('.popup_ques', (card) => {
  popupDelete.renderDeleteLoading(true);
  api.deleteCard(card._id)
    .then(() => {
      card.handleDeleteCard();
      popupDelete.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        popupDelete.renderDeleteLoading(false);
      }, 2000);
    })
})

popupDelete.setEventListeners();

function createCard (data) {
  const card = new Card(data, userId, '#card__template', {
    handleCardClick: (link, name) => {
      popupWithImage.openImage(link, name);
    },
    handleCardLike: (id) => {
      api.addLiked(id)
        .then(() => {
          card.addLike();
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleCardDislike: (id) => {
      api.deleteLike(id)
        .then(() => {
          card.removeLike()
        })
        .catch((err) => {
          console.log(err);
        })
    },
    handleDeleteApiCard: (card) => {
      popupDelete.open(card);
    }
  })
  return card.getView();
}

const cardsSection = new Section({
  renderer: (item) => {
    const cardElem = createCard(item);
    cardsSection.addItem(cardElem);
  }
}, '.element');

Promise.all([
  api.getCards(),
  api.getInfo()
])
  .then(([cardsData, userData]) => {
    userId = userData._id;
    userInfo.setUserInfo({
      name: userData.name,
      jobName: userData.about
    })
    userInfo.setNewAvatar({
      avatar: userData.avatar
    })
    cardsSection.render(cardsData.reverse());
  })
  .catch((err) => {
    console.error(err);
  });



openEditMenuForProfile.addEventListener('click', () => {
  const { name, jobName } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = jobName;
  editPopupForm.open();
  validEdit.disableSubmitButton();
});


openAvatarMenuButton.addEventListener('click', () => {
  validAvatar.disableSubmitButton();
  avatarPopupForm.open();
});

const editPopupForm = new PopupWithForm('.popup_edit', (data) => {
  editPopupForm.renderLoading(true, 'Сохранение...', 'Сохранить')
  const name = data[nameInput.name];
  const jobName = data[jobInput.name];
  api.editProfile(name, jobName)
    .then(() => {
      userInfo.setUserInfo({ name, jobName });
      editPopupForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        editPopupForm.renderLoading(false, 'Сохранение...', 'Сохранить');
      }, 1500)
    })
});

editPopupForm.setEventListeners();

const addPopupForm = new PopupWithForm('.popup_add', (data) => {
  const newCard = {
    name: data[nameImage.name],
    link: data[hrefImage.name]
  };
  addPopupForm.renderLoading(true, 'Создание...', 'Создать');
  api.addCard(newCard)
    .then((cardData) => {
      const cardElem = createCard(cardData);
      cardsSection.addItem(cardElem);
      addPopupForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setTimeout(() => {
        addPopupForm.renderLoading(false, 'Создание...', 'Создать');
      }, 2000);
    })
});


const avatarPopupForm = new PopupWithForm('.popup_avatar', (data) => {
  avatarPopupForm.renderLoading(true, 'Сохранение...', 'Сохранить');
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
    setTimeout(() => {
      avatarPopupForm.renderLoading(false, 'Сохранение...', 'Сохранить');
    }, 1500)
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
