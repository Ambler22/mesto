const openPopupButton = document.querySelector('.profile__edit');
const popupProfileEdit = document.querySelector('.popup-profile');
const nameInput = document.querySelector('[name="name"]');
const jobInput = document.querySelector('[name="description"]');
const closePopupButton = document.querySelector('.popup__img-close');
const formProfile = document.querySelector('[name="form-profile"]');
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__jod');
const popupCards = document.querySelector('.popup-cards');
const closePopupCards = document.querySelector('.popup__img-close_cards');
const popupPhotoForm = document.querySelector('[name="form-cards"]');
const openAddPhoto = document.querySelector('.profile__button');
const popupImage = document.querySelector('.popup-image');
const buttonImageClose = document.querySelector('.popup-image__close');
const templateCards = document.querySelector('#card-template');
const container = document.querySelector('.cards');
const titleInput = document.querySelector('.form-container__input_title');
const imageInput = document.querySelector('.form-container__input_image');

openPopupButton.addEventListener('click', openProfilePopup);
closePopupButton.addEventListener('click', closeProfilePopup);
formProfile.addEventListener('submit', formSubmitHandler);
openAddPhoto.addEventListener('click', openCardsPopup);
closePopupCards.addEventListener('click', closeCardsPopup);
buttonImageClose.addEventListener('click', closeImagePopup)


function openPopup(popup) {
  popup.classList.add('popup_is-opened');
};

function closePopup(popup) {
  popup.classList.remove('popup_is-opened');
};

function openProfilePopup() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfileEdit);
};

function closeProfilePopup() {
    closePopup(popupProfileEdit);
};

//function handleOverlayClick (event) {
//    if (event.target === event.currentTarget) {
//        togglePopup(event);
//    }
//}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfileEdit);
};

function openCardsPopup() {
  openPopup(popupCards);
};

function closeCardsPopup () {
  closePopup(popupCards);
};

function openImagePopup() {
  openPopup(popupImage);
};

function closeImagePopup() {
  closePopup(popupImage);
};

function addNewPhoto(image, title, alt) {
  const card = templateCards.content.querySelector('.card').cloneNode(true);
  const cardRemoveButton = card.querySelector('.card__delete');
  const newPhoto = card.querySelector('.card__img');

  card.querySelector('.card__img').src = image;
  card.querySelector('.card__text').textContent = title;
  card.querySelector('.card__img').alt = alt;

  newPhoto.addEventListener('click', openPhotoPopup);
  card.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardRemoveButton.addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });

  return card;
};

popupPhotoForm.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const image = imageInput.value;
  const title = titleInput.value;
  const alt = titleInput.value;
  const addNewCard = addNewPhoto(image, title, alt);
  container.prepend(addNewCard)
  closeCardsPopup();
  imageInput.value = '';
  titleInput.value = '';
});

function openPhotoPopup(evt) {
  openImagePopup()
  const popupFullPhoro = document.querySelector('.popup-image__photo');
  const popupFullText = document.querySelector('.popup-image__title');
  popupFullPhoro.src = evt.target.src;
  popupFullText.textContent = evt.target.alt; 
};

const initialCards = [{
  name: 'Осло',
  link: 'https://i03.fotocdn.net/s127/13b106dc9efae759/public_pin_l/2876449823.jpg',
  alt: 'Осло'
},
{
  name: 'Франция',
  link: 'https://i.pinimg.com/originals/a6/b9/52/a6b9522c3203a1dfb37a44c0e5b9210d.jpg',
  alt: 'Франция'
},
{
  name: 'Сан-Франциско',
  link: 'https://pbs.twimg.com/media/DfojgyaW4AAmniU.jpg',
  alt: 'Сан-Франциско'
},
{
  name: 'Исландия',
  link: 'https://sun9-36.userapi.com/lZh09Kd9a5eWt3A-3Ttq_zKePITM7dZ0kZYv8A/NebfNL_DRnM.jpg',
  alt: 'Исландия'
},
{
  name: 'Новая Зеландия',
  link: 'https://i.pinimg.com/736x/78/5c/aa/785caabffc5352f1a3d02aff7b6643c9--world-photo.jpg',
  alt: 'Новая Зеландия'
},
{
  name: 'Индонезия',
  link: 'https://avatars.mds.yandex.net/get-zen_doc/1222645/pub_5ddcc6ff21552277da47ab8a_5ddcdaea6c428f7920c2dc22/scale_1200',
  alt: 'Индонезия'
}];

initialCards.forEach(function (element) {
  const newCard = addNewPhoto(element.link, element.name, element.alt);
  container.append(newCard);
});