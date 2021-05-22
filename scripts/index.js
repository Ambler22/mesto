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
const popupImage = document.querySelector('.popup-image');
const templateCards = document.querySelector('#card-template');
const container = document.querySelector('.cards');
const titleInput = document.querySelector('.form-container__input_title');
const imageInput = document.querySelector('.form-container__input_image');
const popupFullPhoro = document.querySelector('.popup-image__photo');
const popupFullText = document.querySelector('.popup-image__title');
const popups = Array.from(document.querySelectorAll('.popup'));
const inputList = Array.from(formProfile.querySelectorAll('.form-container__input'));
const buttonElement = formProfile.querySelector('.form-container__button');
const popupCardsForm = document.querySelector('.form-cards');

formProfile.addEventListener('submit', handlerProfileFormSubmit);

function openPopup(popup) {
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
  const cardsButton = popupCardsForm.querySelector('.form-container__button');
  const cardsInputs = Array.from(popupCardsForm.querySelectorAll('.form-container__input'));
  toggleButtonState(cardsButton, cardsInputs);
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

function addNewPhoto(image, title, alt) {
  const card = templateCards.content.querySelector('.card').cloneNode(true);
  const cardRemoveButton = card.querySelector('.card__delete');
  const newPhoto = card.querySelector('.card__img');

  newPhoto.src = image;
  card.querySelector('.card__text').textContent = title;
  newPhoto.alt = alt;

  newPhoto.addEventListener('click', openPhotoPopup);
  card.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardRemoveButton.addEventListener('click', function (evt) {
    evt.target.closest('.card').remove();
  });

  return card;
}

handlerPhotoFormSubmit.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const image = imageInput.value;
  const title = titleInput.value;
  const alt = titleInput.value;
  const addNewCard = addNewPhoto(image, title, alt);
  container.prepend(addNewCard)
  closePopup(popupCards);
  imageInput.value = '';
  titleInput.value = '';
});

function openPhotoPopup(evt) {
  openPopup(popupImage);
  popupFullPhoro.src = evt.target.src;
  popupFullText.textContent = evt.target.alt;
}

initialCards.forEach(function (element) {
  const newCard = addNewPhoto(element.link, element.name, element.alt);
  container.append(newCard);
});

enableValidation({
  formSelector: '.form',
  inputSelector: '.form-container__input',
  submitButtonSelector: '.form-container__button',
  inputErrorClass: 'form-container__input_type_error',
  errorActiveClass: 'form-container__input-error_active'
});