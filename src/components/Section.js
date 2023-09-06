class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
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
