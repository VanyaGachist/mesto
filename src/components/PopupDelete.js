import Popup from "./Popup";

class PopupDelete extends Popup {
  constructor(popupSelector, handleSubmit)  {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleSubmit = handleSubmit;
    this._deleteButton = this._form.querySelector('.popup__confirm');
  }

  _getCard(card) {
    this._card = card;
  }

  open(card) {
    this._getCard(card);
    super.open();
  }

  renderDeleteLoading(isLoading) {
    if(isLoading) {
      this._deleteButton.textContent = 'Удаление...';
    } else {
      this._deleteButton.textContent = 'Да';
    }
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
