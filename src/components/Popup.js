// Общий класс для открытия и закрытия попапа

class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleClosePopupWithEsc = this._handleClosePopupWithEsc.bind(this);
  }

  open() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleClosePopupWithEsc);
  }

  close() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleClosePopupWithEsc);
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
    this._popup.querySelector('.popup__close').addEventListener('click', () => {
      this.close();
    });

    this._popup.addEventListener('click', this._handeClosePopupWithClickToZone.bind(this));
  }

}


export default Popup;
