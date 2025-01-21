class Set {
  constructor() {
    this.items = {};
  }
  hasElement(element) {
    // return element in this.items; // Aqui verifica se a cadeia de objetos tem a propriedade
    return Object.prototype.hasOwnProperty.call(this.items, element); //Aqui verifica se o objeto tem a propriedade especificada
  }
  addElement(element) {
    if (!this.hasElement(element)) {
      this.items[element] = element;
      return true;
    }
    return false;
  }
  deleteElement(element) {
    if (this.hasElement(element)) {
      delete this.items[element];
      return true;
    }
    return false;
  }
  clear() {
    this.items = {};
  }
  size() {
    return Object.keys(this.items).length;
  }
}
const conj = new Set();
console.log(conj.hasElement());
conj.addElement(2);
console.log(conj);

conj.addElement(4);
console.log(conj.hasElement(2));
// conj.deleteElement(2);

// console.log("Alterado", conj);

// conj.clear();
// console.log("After Clear method", conj);
