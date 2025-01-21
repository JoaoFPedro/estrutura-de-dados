class Set {
  constructor() {
    this.items = {};
  }
  hasElement(element) {
    return element in this.items; // Aqui verifica se a cadeia de objetos tem a propriedade
    //  return Object.prototype.hasOwnProperty.call(this.items, element); Aqui verifica se o objeto tem a propriedade especificada
  }
}
const conj = new Set();
console.log(conj.hasElement());
