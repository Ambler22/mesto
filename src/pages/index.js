import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-Cards.js';
import './index.css';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { openPopupProfileButton, nameInput, jobInput, formProfile, openPopupCardsButton, popupCardsForm, inputsCard, inputsProfile, cardSelector, config } from '../utils/constants.js';

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

const popupWithImage = new PopupWithImage('.popup-image');
const cardFormValidator = new FormValidator(config, popupCardsForm);
const profileFormValidator = new FormValidator(config, formProfile); 

const cardSection = new Section({
  items: initialCards,
  renderer: (cardData) => {
    const cardElement = new Card(cardData, cardSelector, handleCardClick);
    return cardElement.render();
  }
}, '.cards');

const addCardPopup = new PopupWithForm(
  '.popup-cards',
  (cardData) => {
    cardSection.addItem(cardData);
    addCardPopup.close();
  },
);

const editProfilePopup = new PopupWithForm(
  '.popup-profile',
  (userData) => {
    userInfo.setUserInfo(userData);
    editProfilePopup.close();
  },
);

const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userDescriptionSelector: '.profile__jod'
}); 

addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
popupWithImage.setEventListeners();
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
cardSection.renderAllCards();

openPopupProfileButton.addEventListener('click', function () {
  editProfilePopup.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.description;

  inputsProfile.forEach((input) => {
    profileFormValidator.hideInputError(input);
  });
});

openPopupCardsButton.addEventListener('click', () => {
  addCardPopup.open();

  inputsCard.forEach((input) => {
    cardFormValidator.hideInputError(input);
  });
  cardFormValidator.toggleButtonState();
});