export class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

_getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`);
    }
    return res.json();
}

getUserInfo() {
    return fetch(`${this.url}/users/me`, {
        headers: this.headers,
    })
    .then(res => this._getResponseData(res));
};

getCards() {
    return fetch(`${this.url}/cards`, {
        headers: this.headers,
    })
    .then(res => this._getResponseData(res));
};

setUserInfo(data) {
    return fetch(`${this.url}/users/me`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            name: data.name,
            about: data.about,
        })
    })
    .then(res => this._getResponseData(res));
}

setUserAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: data.link,
        })
    })
    .then(res => this._getResponseData(res));
}

setCards(data) {
    return fetch(`${this.url}/cards`, {
        method: 'POST',
        headers: this.headers,
        body: JSON.stringify({
            name: data.name,
            link: data.link,
        })
    })
    .then(res => this._getResponseData(res));
}

deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this.headers,
        })
        .then(res => this._getResponseData(res));
}

setLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this.headers,
    })
    .then(res => this._getResponseData(res));
}

deleteLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this.headers,
    })
    .then(res => this._getResponseData(res));
}

}