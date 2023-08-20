// Общий класс для открытия и закрытия попапа

class Popup {
  constructor(popup) {
    this._popup = popup;
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    window.addEventListener('keydown', this._handleClosePopupWithEsc.bind(this));
    this._popup.addEventListener('click', this._handeClosePopupWithClickToZone.bind(this));
  }

  closePopup() {
    this._popup.classList.remove('popup_opened');
    window.removeEventListener('keydown', this._handleClosePopupWithEsc.bind(this));
    this._popup.removeEventListener('click', this._handeClosePopupWithClickToZone.bind(this));
  }

  _handleClosePopupWithEsc(evt) {
    if(evt.key === 'Escape') {
      this.closePopup();
    }
  }

  _handeClosePopupWithClickToZone(evt) {
    if(evt.target === this._popup) {
      this.closePopup();
    }
  }
}


export default Popup;
