export const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

export const initialCards = [
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

export const openEditMenuForProfile = document.querySelector('.profile__edit-button');
export const openAddMenuButton = document.querySelector('.profile__add-button');
export const nameImage = document.querySelector('.popup__input_text_name-image');
export const hrefImage = document.querySelector('.popup__input_href-image');
export const nameInput = document.querySelector('.popup__input_text_name');
export const jobInput = document.querySelector('.popup__input_text_after');
