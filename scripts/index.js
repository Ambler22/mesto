let openPopupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup');
let closePopupButton = document.querySelector('.popup__img-close');
let formElement = document.querySelector('[name="form"]');
let nameInput = document.querySelector('[name="name"]');
let jobInput = document.querySelector('[name="description"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__jod');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);

function openPopup(event) {
    event.preventDefault();
    popup.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
}

function closePopup(event) {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
}


//function handleOverlayClick (event) {
//    if (event.target === event.currentTarget) {
//        togglePopup(event);
//    }
//}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_is-opened');
}