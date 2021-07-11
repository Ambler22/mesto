import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
    constructor(popupSelector, onSubmitCb, inputsConfig) {
        super(popupSelector);
        this._onSubmitCb = onSubmitCb;
        this._inputsConfig = inputsConfig;
        this._formElement = this._popupElement.querySelector('.form');
        this._titleInput = this._formElement.querySelector('.form-container__input_title');
        this._imageInput = this._formElement.querySelector('.form-container__input_image');
        this._submitButton = this._formElement.querySelector('.popup__load');
        this._submitButtonText = this._submitButton.textContent;
    }

    _getInputValues() {
        const inputList = {};
        const inputs = Array.from(this._formElement.querySelectorAll('.form-container__input'));

        inputs.forEach(input => {
            inputList[input.name] = input.value;
        });

        return inputList;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (e) => {
            e.preventDefault();
            const cardData = this._getInputValues()
            this._onSubmitCb(cardData);
        })
    }

    close() {
        super.close();
        this._formElement.reset();
      }

    loadButton(text) {
        this._submitButton.textContent = text;
    }

    notLoadButton() {
        this._submitButton.textContent = this._submitButtonText;
    }
}