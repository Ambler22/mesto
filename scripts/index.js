import { Card } from './Card.js';
import { FormValidator } from './FormValidator.js';
import { initialCards } from './initial-Cards.js';

const buttonProfilePopup = document.querySelector('.profile__edit');
const popupProfileEdit = document.querySelector('.popup-profile');
const nameInput = document.querySelector('[name="name"]');
const jobInput = document.querySelector('[name="description"]');
const formProfile = document.querySelector('[name="form-profile"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__jod');
const popupCards = document.querySelector('.popup-cards');
const handlerPhotoFormSubmit = document.querySelector('[name="form-cards"]');
const openPopupCards = document.querySelector('.profile__button');
export const popupImage = document.querySelector('.popup-image');
const container = document.querySelector('.cards');
const titleInput = document.querySelector('.form-container__input_title');
const imageInput = document.querySelector('.form-container__input_image');
export const popupFullPhoro = document.querySelector('.popup-image__photo');
export const popupFullText = document.querySelector('.popup-image__title');
const popups = Array.from(document.querySelectorAll('.popup'));
const popupCardsForm = document.querySelector('.form-cards');

formProfile.addEventListener('submit', handlerProfileFormSubmit);

export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_is-opened');
    closePopup(openedPopup);
  }
};

popups.forEach((popup) => {
  popup.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('popup_is-opened')) {
      closePopup(popup)
    }
    if (evt.target.classList.contains('popup__img-close')) {
      closePopup(popup)
    }
  })
})

buttonProfilePopup.addEventListener('click', function () {
  openPopup(popupProfileEdit);
  openProfilePopup()
});

openPopupCards.addEventListener('click', () => {
  openPopup(popupCards);
  popupCardsForm.reset();
  cardFormValidator.toggleButtonState();
});

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfileEdit);
};

function handlerProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
}

handlerPhotoFormSubmit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const image = imageInput.value;
  const name = titleInput.value;
  const alt = titleInput.value;
  const addNewCard = addNewPhoto(name, image, alt);
  container.prepend(addNewCard)
  closePopup(popupCards);
  imageInput.value = '';
  titleInput.value = '';
});

function addNewPhoto(name, link, alt) {
  const cardElement = new Card(name, link, alt, '.card');
  return cardElement.render();
}

initialCards.forEach(function (element) {
  const newCard = addNewPhoto(element.name, element.link, element.alt);
  container.append(newCard);
});

const profileFormValidator = new FormValidator(
  {
    formSelector: '.form',
    inputSelector: '.form-container__input',
    submitButtonSelector: '.form-container__button',
    inputErrorClass: 'form-container__input_type_error',
    errorActiveClass: 'form-container__input-error_active'
  },
  document.querySelector('[name="form-profile"]')
);
profileFormValidator.enableValidation();

const cardFormValidator = new FormValidator(
  {
    formSelector: '.form',
    inputSelector: '.form-container__input',
    submitButtonSelector: '.form-container__button',
    inputErrorClass: 'form-container__input_type_error',
    errorActiveClass: 'form-container__input-error_active'
  },
  document.querySelector('[name="form-cards"]')
);
cardFormValidator.enableValidation();