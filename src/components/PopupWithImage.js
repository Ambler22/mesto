import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);

    this._popupText = this._popupElement.querySelector('.popup-image__title');
    this._popupImage = this._popupElement.querySelector('.popup-image__photo');
  }

  open(name, link) {
    super.open();

    this._popupImage.src = link;
    this._popupText.textContent = name;
    this._popupImage.alt = name;
  }
};