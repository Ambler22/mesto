export const openPopupProfileButton = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('.popup-profile');
export const nameInput = document.querySelector('[name="name"]');
export const jobInput = document.querySelector('[name="description"]');
export const formProfile = document.querySelector('[name="form-profile"]');
const popupCards = document.querySelector('.popup-cards');
export const openPopupCardsButton = document.querySelector('.profile__button');
export const FullPhoto = document.querySelector('.popup-image__photo');
export const FullText = document.querySelector('.popup-image__title');
export const popupCardsForm = document.querySelector('.form-cards');
export const inputsCard = Array.from(popupCards.querySelectorAll('.form-container__input'));
export const inputsProfile = Array.from(popupProfile.querySelectorAll('.form-container__input'));
export const cardSelector = '#card-template';
export const config = {
formSelector: '.form',
inputSelector: '.form-container__input',
submitButtonSelector: '.form-container__button',
inputErrorClass: 'form-container__input_type_error',
errorActiveClass: 'form-container__input-error_active',
containerSelector: '.cards'
};