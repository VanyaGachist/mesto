// Общий класс для открытия и закрытия попапа

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClosePopupWithEsc = this._handleClosePopupWithEsc.bind(this);
    this._handeClosePopupWithClickToZone = this._handeClosePopupWithClickToZone.bind(this);
    this._closeButton = this._popup.querySelector('.popup__close');
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleClosePopupWithEsc);
    this._popup.addEventListener('click', this._handeClosePopupWithClickToZone);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleClosePopupWithEsc);
    this._popup.removeEventListener('click', this._handeClosePopupWithClickToZone);
  }

  _handleClosePopupWithEsc(evt) {
    if(evt.key === 'Escape') {
      this.close();
    }
  }

  _handeClosePopupWithClickToZone(evt) {
    if(evt.target === this._popup) {
      this.close();
    }
  }

  setEventListeners() {
    this._closeButton.addEventListener('click', this.close.bind(this));
  }
}


export default Popup;
