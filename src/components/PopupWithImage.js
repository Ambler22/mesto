import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupText = this._popupElement.querySelector('.popup-image__title');
    this._popupImage = this._popupElement.querySelector('.popup-image__content');
  }

  open(name, link) {
    super.open();

    this._popupText.textContent = name;
    this._popupImage.src = link;
    this._popupImage.alt = link;
  }
};