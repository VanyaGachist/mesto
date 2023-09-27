import Popup from "./Popup";

class PopupDelete extends Popup {
  constructor(popupSelector, handleSubmit)  {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleSubmit = handleSubmit;
  }

  _getCard(card) {
    this._card = card;
  }

  open(card) {
    this._getCard(card);
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit(this._card);
    });
  }
}

export default PopupDelete;
