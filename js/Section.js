class Section {
  constructor({ data, renderer }, container) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(container);
  }

  addItem(elem) {
    this._container.prepend(elem);
  }

  render() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}

export default Section;
