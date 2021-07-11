export class Section {
    constructor({items, renderer}, containerSelector) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelector = containerSelector;
        this._element = document.querySelector(containerSelector);
    }

    renderAllCards(items) {
        items.forEach(item => {
            this.addItem(item);
        });
    }

    addItem(data) {
        this._element.append(this._renderer(data));
    }


    addItemPrepend(item) {
        this._element.prepend(this._renderer(item));
    }
};

