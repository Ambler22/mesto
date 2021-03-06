import { ESC } from '../utils/constants.js';

export class Popup {
    constructor(popupSelector) {
        this._popupElement = document.querySelector(popupSelector);
        this._closeButton = this._popupElement.querySelector('.popup__img-close');
    }

    open() {
        this._popupElement.classList.add('popup_is-opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popupElement.classList.remove('popup_is-opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose = evt => {
        if (evt.key === ESC) {
            this.close();
        }
    }

    _handleOverlayClose = evt => {
        if (evt.target.classList.contains('popup_is-opened')) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.close();
        });
        this._popupElement.addEventListener('mousedown', this._handleOverlayClose);
    }
}