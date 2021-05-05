let openPopupButton = document.querySelector('.profile__edit');
let popup = document.querySelector('.popup-profile');
let closePopupButton = document.querySelector('.popup__img-close');
let formElement = document.querySelector('[name="form"]');
let nameInput = document.querySelector('[name="name"]');
let jobInput = document.querySelector('[name="description"]');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__jod');
const popupCards = document.querySelector('.popup__cards'); // попап фото
const closePopupCards = document.querySelector('.popup__img-close_cards'); //кнопка зактытия попара карточек
const newPhoto = document.querySelector('.card__img'); // новое фото
const newTitle = document.querySelector('.card__text'); // новый заголовок
const popupPhotoForm = document.querySelector('[name="form-cards"]'); // форма попапа карточек
const openAddPhoto = document.querySelector('.profile__button');

openPopupButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
closePopupCards.addEventListener('click', popupCardClose);

function openPopup(event) {
    event.preventDefault();
    popup.classList.add('popup_is-opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileJob.textContent;
};

function closePopup(event) {
    event.preventDefault();
    popup.classList.remove('popup_is-opened');
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
    popup.classList.remove('popup_is-opened');
};

openAddPhoto.addEventListener('click', function(event) { 
    event.preventDefault();
    popupCards.classList.add('popup_is-opened'); 
}); //функция открытия попапа карточек

function popupCardClose() {
    popupCards.classList.remove('popup_is-opened');
}; //функция закрытия попапа карточек

const initialCards = [{
      name: 'Осло',
      link: 'https://i03.fotocdn.net/s127/13b106dc9efae759/public_pin_l/2876449823.jpg'
    },
    {
      name: 'Франция',
      link: 'https://i.pinimg.com/originals/a6/b9/52/a6b9522c3203a1dfb37a44c0e5b9210d.jpg'
    },
    {
      name: 'Сан-Франциско',
      link: 'https://pbs.twimg.com/media/DfojgyaW4AAmniU.jpg'
    },
    {
      name: 'Исландия',
      link: 'https://sun9-36.userapi.com/lZh09Kd9a5eWt3A-3Ttq_zKePITM7dZ0kZYv8A/NebfNL_DRnM.jpg'
    },
    {
      name: 'Новая Зеландия',
      link: 'https://i.pinimg.com/736x/78/5c/aa/785caabffc5352f1a3d02aff7b6643c9--world-photo.jpg'
    },
    {
      name: 'Индонезия',
      link: 'https://avatars.mds.yandex.net/get-zen_doc/1222645/pub_5ddcc6ff21552277da47ab8a_5ddcdaea6c428f7920c2dc22/scale_1200'
}];

const template = document.querySelector('#card-template').content;
const container = document.querySelector('.cards');

function addPhoto(image, title) {
  const card = template.cloneNode(true);
  const cardRemoveButton = card.querySelector('.card__delete');

  card.querySelector('.card__img').src = image;
  card.querySelector('.card__text').textContent = title;
  card.querySelector('.card__like').addEventListener('click', function(evt) {
    evt.target.classList.toggle('card__like_active');
  });
  cardRemoveButton.addEventListener('click', function(evt) {
    evt.target.closest('.card').remove();
  });
  return card;
};

initialCards.forEach(function (element) {
    const newCard = addPhoto(element.link, element.name);
    container.append(newCard);
});


popupPhotoForm.addEventListener('submit', function(evt) {
  const titleInput = document.querySelector('.form-container__input_title'); // инпут название
  const imageInput = document.querySelector('.form-container__input_image'); // инпут фото
  evt.preventDefault();
  const image = imageInput.value;
  const title = titleInput.value;
  const addNewCard = addPhoto(image, title);
  container.prepend(addNewCard)
  popupCardClose();
  imageInput.value = '';
  titleInput.value = '';
});