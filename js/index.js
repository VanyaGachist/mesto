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
const openedPopup = document.querySelector('.popup_opened');

const initialCards = [
  {
    name: 'Mr. Vselenaya',
    link: 'https://i.ytimg.com/vi/TVB8pbuUpMA/maxresdefault.jpg'
  },
  {
    name: 'Pepe',
    link: 'https://phonoteka.org/uploads/posts/2021-06/thumbs/1624840864_1-phonoteka_org-p-lyagushka-pepe-oboi-krasivo-1.jpg'
  },
  {
    name: 'Собчак',
    link: 'https://wikiwarriors.org/mediawiki/images/e/e4/WalterSobchak.jpg'
  },
  {
    name: '40',
    link: 'https://cs12.pikabu.ru/post_img/big/2022/01/25/7/1643108970148553768.jpg'
  },
  {
    name: 'bububub',
    link: 'https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/03/The-boys-billy-butcher-1.jpg'
  }
];

function closePopup (popup) {
  popup.classList.remove('popup_opened');
}

function openPopup (popup) {
  popup.classList.add('popup_opened');

  const closePopupWithEscape = (evt) => {
    if(evt.key === 'Escape') {
      closePopup(popup);
    }
  }
  const closePopupWithClickToZone = (evt) => {
    if(evt.target === popup) {
      closePopup(popup);
    }
  }

  document.addEventListener('keydown', closePopupWithEscape);
  document.addEventListener('click', closePopupWithClickToZone);
}

openEditMenuForProfile.addEventListener('click', function () {
  nameInputForProfile.value = nameOfProfile.textContent;
  jobInputForProfile.value = jobOfProfile.textContent;
  openPopup(editMenuPopup);
});

openAddMenuButton.addEventListener('click', function () {
  openPopup(addMenuPopup);
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
  const cardsTemplate = document.querySelector('#card__template').content;
  const li = cardsTemplate.querySelector('.element__item').cloneNode(true);
  const img = li.querySelector('.element__image');
  const heading = li.querySelector('.element__heading');
  heading.textContent = cardName;
  const heart = li.querySelector('.element__button');
  const trash = li.querySelector('.element__trash');
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

  closePopupWithFullScreanImage.addEventListener('click', function () {
    closePopup(openPopupWithFullScreanImage);
  });

  return li;
}

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

ValidationConfig = ({
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
});

enableValidation(ValidationConfig);
