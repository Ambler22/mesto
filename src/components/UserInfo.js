export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector}) {
        this._name = document.querySelector(userNameSelector);
        this._description = document.querySelector(userDescriptionSelector);
    }

    getUserInfo() {
        this._userData = {
            name: this._name.textContent,
            description: this._description.textContent
        }
        return this._userData;
    };

    setUserInfo(data) {
        this._name.textContent = data.name,
        this._description.textContent = data.description
    };
}