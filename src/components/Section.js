class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(elem) {
    this._container.prepend(elem);
  }

  render(items) {
    items.forEach((item) => {
      this._renderer(item);
    });
  }
}

export default Section;
