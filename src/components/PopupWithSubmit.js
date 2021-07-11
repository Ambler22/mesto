import { Popup } from './Popup.js';

export class PopupWithSubmit extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    submit(action) {
        this._handleRemoveClick = action;
    }

    setEventListeners() {
        this._submitButton = this._popupElement.querySelector('.form-container__button_cards_delete');
        this._submitButton.addEventListener('click', () => {
            this._handleRemoveClick();
        })
        this._popupElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submit();
        })
        super.setEventListeners();
    }
}