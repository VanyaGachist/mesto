const openMenu = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close_first');
const closeButtonSecond = document.querySelector('.popup__close_second');
const popupMain = document.querySelector('.popup_edit');
const secondPopup = document.querySelector('.popup_add');
const mainName = document.querySelector('.profile__heading');
const afterMain = document.querySelector('.profile__subtitle');
const formElement = document.querySelector('.popup__buttons');
const nameInput = formElement.querySelector('.popup__input_text_name');
const jobInput = formElement.querySelector('.popup__input_text_after');
const openAddMenu = document.querySelector('.profile__add-button');
const elementsContainer = document.querySelector('.element');
const nameImg = document.querySelector('.popup__input-text_name-image');
const hrefImage = document.querySelector('.popup__input-text_image');
const createCard = document.querySelector('.popup__create');
const popupTextImage = document.querySelector('.popup__subtitle');
const fullScreanImagePopup = document.querySelector('.popup__image');
const popupWithImage = document.querySelector('.popup_full');
const closePopupThird = document.querySelector('.popup__close_third');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

function openPopup () {
  popupMain.classList.add('popup_opened');
}

function closePopup () {
  popupMain.classList.remove('popup_opened');
}

function closePopupSecond () {
  secondPopup.classList.remove('popup_opened');
}

openMenu.addEventListener('click', function () {
  nameInput.value = mainName.textContent;
  jobInput.value = afterMain.textContent;
  openPopup()
});

openAddMenu.addEventListener('click', function () {
  secondPopup.classList.add('popup_opened');
});

closeButtonSecond.addEventListener('click', closePopupSecond);
closeButton.addEventListener('click', closePopup);

function handleFormSubmit (evt) {
  evt.preventDefault();
  mainName.textContent = nameInput.value;
  afterMain.textContent = jobInput.value;
  closePopup()
}

formElement.addEventListener('submit', handleFormSubmit);


const renderCards = (cardName, cardImage) => {
  const li = document.createElement('li');
  li.classList.add('element__item');
  const img = document.createElement('div');
  img.classList.add('element__image');
  img.style.backgroundImage = `url(${cardImage})`;
  const div = document.createElement('div');
  div.classList.add('element__info');
  const heading = document.createElement('h2');
  heading.classList.add('element__heading');
  heading.textContent = cardName;
  const heart = document.createElement('button');
  heart.classList.add('element__button');
  const trash = document.createElement('button');
  trash.classList.add('element__trash');
  div.append(heading, heart);
  li.append(img, div, trash);

  heart.addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__button_color_black');
  });

  trash.addEventListener('click', function(evt) {
    const item = evt.target.closest('.element__item');
    item.remove();
  });

  function openImage () {
    fullScreanImagePopup.src = cardImage;
    popupTextImage.textContent = heading.textContent;
    console.log(fullScreanImagePopup);
  }

  img.addEventListener('click', function () {
    openImage();
    popupWithImage.classList.add('popup_opened');
  });

  function closePopupImage () {
    popupWithImage.classList.remove('popup_opened');
  }

  closePopupThird.addEventListener('click', closePopupImage);

  return li;
}

initialCards.forEach(cards => {
  elementsContainer.append(renderCards(cards.name, cards.link));
});

function addCardsSubmit () {
  const name = nameImg.value;
  const link = hrefImage.value;
  elementsContainer.prepend(renderCards(name, link));
}

createCard.addEventListener('click', (evt) => {
  evt.preventDefault();
  addCardsSubmit();
  closePopupSecond();
});

