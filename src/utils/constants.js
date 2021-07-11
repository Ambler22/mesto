export const openPopupProfileButton = document.querySelector('.profile__edit');
export const openPopupAvatarImage = document.querySelector('.profile__avatar');
const popupProfile = document.querySelector('.popup-profile');
export const nameInput = document.querySelector('[name="name"]');
export const jobInput = document.querySelector('[name="description"]');
export const formProfile = document.querySelector('[name="form-profile"]');
const popupCards = document.querySelector('.popup-cards');
export const openPopupCardsButton = document.querySelector('.profile__button');
export const popupCardsForm = document.querySelector('.form-cards');
export const popupAvatarForm = document.querySelector('[name="form-avatar_update"]')
export const inputsProfile = Array.from(popupProfile.querySelectorAll('.form-container__input'));
export const inputAvatar = document.querySelector('.form-container__input_avatar_update');
export const inputNameCard = document.querySelector('.form-container__input_title');
export const inputLinkCard = document.querySelector('.form-container__input_image');
export const config = {
formSelector: '.form',
inputSelector: '.form-container__input',
submitButtonSelector: '.form-container__button',
inputErrorClass: 'form-container__input_type_error',
errorActiveClass: 'form-container__input-error_active',
containerSelector: '.cards'
};
export const apiData = {
  url: 'https://nomoreparties.co/v1/cohort-25',
  headers: {
    authorization: '2db1777b-72eb-4863-bc5d-c00b58939d4b',
    'Content-Type': 'application/json'
  }
}