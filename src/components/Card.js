export class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;

    this._makeElements();
    this._setEventListeners();
  }

  _makeElements() {
    const templateCards = document.querySelector('#card-template')
    this._card = templateCards.content.querySelector('.card').cloneNode(true);

    this._likeButton = this._card.querySelector('.card__like');
    this._cardRemoveButton = this._card.querySelector('.card__delete');
    this._newPhoto = this._card.querySelector('.card__img');

    this._card.querySelector('.card__text').textContent = this._name;
    this._newPhoto.src = this._link;
    this._newPhoto.alt = this._name;
  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick());
    this._cardRemoveButton.addEventListener('click', () => this._handleRemoveClick());
    this._newPhoto.addEventListener('click', () => {
    this.handleCardClick(this._name, this._link);
    });
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like_active');
  }

  _handleRemoveClick(evt) {
    this._card.remove();
  }
  
  render() {
    return this._card;
  }
};