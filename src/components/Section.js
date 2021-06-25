export class Section {
    constructor({ items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;

        this._element = document.querySelector(containerSelector);
    }

    renderAllCards() {
        this._items.forEach(cardData => {
            this.addItem(cardData);
        });
    }

    addItem(cardData) {
        this._element.append(this._renderer(cardData));
    }   
};