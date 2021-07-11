export class Card {
  constructor({data, handleCardClick, handleRemoveClick, handleLikeClick}, templateSelector) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner._id;
    this._cardId = data._id;
    this._userId = data.userId;
    this._templateSelector = templateSelector;
    this.handleCardClick = handleCardClick;
    this.handleRemoveClick = handleRemoveClick;
    this._handleLikeClick = handleLikeClick;

    this._makeElements();
    this._setEventListeners();
    this.showAllLikes();
  }

  _makeElements() {
    const templateCards = document.querySelector('#card-template')
    this._card = templateCards.content.querySelector('.card').cloneNode(true);

    this._likeButton = this._card.querySelector('.card__like');
    this._cardRemoveButton = this._card.querySelector('.card__delete');
    this._newPhoto = this._card.querySelector('.card__img');
    this._likeCounter = this._card.querySelector('.card__like_number')

    this._card.querySelector('.card__text').textContent = this._name;
    this._newPhoto.src = this._link;
    this._newPhoto.alt = this._name;

  }

  _setEventListeners() {
    this._likeButton.addEventListener('click', () => this._handleLikeClick(this._cardId));
    this._cardRemoveButton.addEventListener('click', () => this.handleRemoveClick(this._cardId));
    this._newPhoto.addEventListener('click', () => {
    this.handleCardClick(this._name, this._link);
    });
  }

  removeCard() {
    this._card.remove()
  }

  _handleLikeClick() {
    this._likeButton.classList.toggle('card__like_active');
  }
  
  render() {
    if(this._data.owner._id !== this._userId) {
      console.log('чужие карточки');
      this._card.querySelector('.card__delete').remove();
    }
    return this._card;
  }

  setLike(list) {
     this._likes = list;
  }

  returnUserId() {
    return this._likes.some(like => {
      return like._id === this._userId;
    });
  }

  changeLikeButton() {
    if (this.returnUserId(this._userId)) {
        this._likeButton.classList.add('card__like_active');
    } else {
        this._likeButton.classList.remove('card__like_active');
      }
  }

  showAllLikes() {
    this._likeCounter.textContent = this._likes.length;
      this.changeLikeButton(this._userId);
  }
};