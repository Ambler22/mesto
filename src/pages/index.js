import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initial-Cards.js';
import './index.css';
import { Section } from '../components/Section.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { openPopupProfileButton, openPopupAvatarImage, nameInput, jobInput, formProfile, openPopupCardsButton, popupCardsForm, popupAvatarForm, inputsProfile, inputAvatar, inputNameCard, inputLinkCard, apiData, config } from '../utils/constants.js';
import { Api } from '../components/Api.js';
import { PopupWithSubmit } from '../components/PopupWithSubmit.js';

let userId;

const api = new Api (apiData);

Promise.all([
  api.getUserInfo(),
  api.getCards(),
]).then(([userData, cards]) => {
  userInfo.setUserInfo(userData);
  userId = userData._id;

  cardSection.renderAllCards(cards);
});

const handleCardClick = (name, link) => {
  popupWithImage.open(name, link);
};

const cardFormValidator = new FormValidator(config, popupCardsForm);
const profileFormValidator = new FormValidator(config, formProfile);
const avatarFormValidator = new FormValidator(config, popupAvatarForm);

const popupWithImage = new PopupWithImage('.popup-image');
const popupDelete = new PopupWithSubmit('.popup__cards-delete');

const createCard = (data) => {
  const cardElement = new Card({
    data: {...data, userId}, handleCardClick,
    handleRemoveClick: (cardId) => {
      popupDelete.open();
      popupDelete.submit(() => {
        api.deleteCard(cardId)
        .then(() => {
      return cardElement.removeCard();
    })
    .catch((error) => {
      console.log(error);
    })
        popupDelete.close();
      })
    },
    handleLikeClick: (cardId) => {
    const likesCounter = cardElement.returnUserId();
    const result = likesCounter ? api.deleteLike(cardId) : api.setLike(cardId);

    result
        .then(data => {
            cardElement.setLike(data.likes);
            cardElement.showAllLikes();
      })
      .catch((error) => {
      console.log(error);
     })
      },
    });
  return cardElement;
};

const cardSection = new Section({
  renderer: (data) => {
    createCard(data);

    return createCard(data).render();
  }
}, '.cards');

const userInfo = new UserInfo({
    userNameSelector: '.profile__name', 
    userDescriptionSelector: '.profile__jod',
    userAvatarSelector: '.profile__avatar',
}); 

const addCardPopup = new PopupWithForm(
  '.popup-cards',
  () => {
    addCardPopup.loadButton('Сохранение...');
    api.setCards({name: inputNameCard.value, link: inputLinkCard.value})
    .then((data) => {
      cardSection.addItemPrepend(data);
    })
    .catch((error) => {
      console.log(error)
    })
    addCardPopup.close();
    addCardPopup.notLoadButton();
  }
);

const editProfilePopup = new PopupWithForm(
  '.popup-profile',
  () => {
    editProfilePopup.loadButton('Сохранение...');
    api.setUserInfo({name: nameInput.value, about:jobInput.value})
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((error) => {
      console.log(error)
    })

    editProfilePopup.close();
    editProfilePopup.notLoadButton();
  }
);

const changeUserAvatar = new PopupWithForm(
  '.popup__avatar-update',
  () => {
    changeUserAvatar.loadButton('Сохранение...');
    api.setUserAvatar({link: inputAvatar.value})
    .then((data) => {
      userInfo.setUserAvatar(data);
    })
    .catch((error) => {
      console.log(error);
    })
    changeUserAvatar.close();
    changeUserAvatar  .notLoadButton();
  }
);

addCardPopup.setEventListeners();
editProfilePopup.setEventListeners();
popupWithImage.setEventListeners();
changeUserAvatar.setEventListeners();
popupDelete.setEventListeners();

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();


openPopupProfileButton.addEventListener('click', function () {
  editProfilePopup.open();

  const data = userInfo.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.about;

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

openPopupAvatarImage.addEventListener('click', () => {
  changeUserAvatar.open();

  avatarFormValidator.hideInputError();

  avatarFormValidator.toggleButtonState();
})