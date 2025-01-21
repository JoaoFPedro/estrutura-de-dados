class Set {
  constructor() {
    this.items = {};
  }
  hasElement(element) {
    return element in this.items;
  }
}
const conj = new Set();
console.log(conj.hasElement());
