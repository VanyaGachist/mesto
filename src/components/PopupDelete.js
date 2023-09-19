import Popup from "./Popup";

class PopupDelete extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
    this._handleDelete = handleDelete;
  }

  setEventListeners(cardId) {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleDeleteCard(cardId);
      this.close();
    });
  }
}

export default PopupDelete;
