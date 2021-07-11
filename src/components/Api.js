export class Api {
    constructor(config) {
        this.url = config.url;
        this.headers = config.headers;
    }

getUserInfo() {
    return fetch(`${this.url}/users/me`, {
        headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
};

getCards() {
    return fetch(`${this.url}/cards`, {
        headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
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
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

setUserAvatar(data) {
    return fetch(`${this.url}/users/me/avatar`, {
        method: 'PATCH',
        headers: this.headers,
        body: JSON.stringify({
            avatar: data.link,
        })
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
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
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
        method: 'DELETE',
        headers: this.headers,
        })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

setLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

deleteLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: this.headers,
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

}