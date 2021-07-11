export class UserInfo {
    constructor({userNameSelector, userDescriptionSelector, userAvatarSelector}) {
        this._name = document.querySelector(userNameSelector);
        this._about = document.querySelector(userDescriptionSelector);
        this._avatar = document.querySelector(userAvatarSelector);
    }

    getUserInfo() {
        this._userData = {
            name: this._name.textContent,
            about: this._about.textContent,
            avatar: this._avatar.src,
            
        }
        return this._userData;
    };

    setUserInfo(data) {
        this._name.textContent = data.name;
        this._about.textContent = data.about;
        this._avatar.src = data.avatar;
    };

    setUserAvatar(data) {
        this._avatar.src = data.avatar;
    };
}