let openPopupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__img-close');
let formElement = document.querySelector('[name="form"]');
let nameInput = document.querySelector('[name="name"]');
let jobInput = document.querySelector('[name="description"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__jod');

function togglePopup(event) {
    event.preventDefault();
    popup.classList.toggle('popup__is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
    }

openPopupButton.addEventListener('click', togglePopup);

closePopupButton.addEventListener('click', togglePopup);

function handleOverlayClick (event) {
    if (event.target === event.currentTarget) {
        togglePopup(event);
    }
}

popup.addEventListener('click', handleOverlayClick);

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup__is-opened');
}

formElement.addEventListener('submit', formSubmitHandler);