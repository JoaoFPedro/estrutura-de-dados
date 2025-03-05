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
  value() {
    return Object.values(this.items);
  }
  union(otherSet) {
    const unionSet = new Set();
    this.values().forEach((value) => unionSet.add(value));
    otherSet.values().forEach((value) => unionSet.add(value));
    return unionSet;
  }
  intersection(otherSet) {
    const intersectionSet = new Set();
    const values = this.values();
    const otherValues = otherSet.values();
    let biggerSet = values;
    let smallerSet = otherValues;
    if (otherValues.length - values.length > 0) {
      biggerSet = otherValues;
      smallerSet = values;
    }
    smallerSet.forEach((value) => {
      if (biggerSet.includes(value)) {
        intersectionSet.add(value);
      }
    });
    return intersectionSet;
  }
  difference(otherSet) {
    const differenceSet = new Set();
    this.values().forEach((value) => {
      if (!otherSet.has(value)) {
        differenceSet.add(value);
      }
    });
    return differenceSet;
  }
  isSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      return false;
    }
    let isSubset = true;
    this.values().every((value) => {
      if (!otherSet.has(value)) {
        isSubset = false;
        return false;
      }
      return true;
    });
    return isSubset;
  }
}
// const conj = new Set();
// console.log(conj.hasElement());
// conj.addElement(2);
// console.log(conj);

// conj.addElement(4);
// console.log(conj.hasElement(2));
// conj.deleteElement(2);

// console.log("Alterado", conj);

// conj.clear();
// console.log("After Clear method", conj);

const setA = new Set();
setA.addElement(1);
setA.addElement(2);
setA.addElement(3);

const setB = new Set();
setB.addElement(3);
setB.addElement(4);
setB.addElement(5);
setB.addElement(6);

const unionAB = setA.union(setB);

console.log("UNIÃO**", unionAB);

//Exemplos para post

const A = new Set([1, 2, 3, 4]);
const B = new Set([3, 4, 5, 6]);

// União
const union = new Set([...A, ...B]);
console.log(union); // {1, 2, 3, 4, 5, 6}

// Interseção
const intersection = new Set([...A].filter((x) => B.has(x)));
console.log(intersection); // {3, 4}

// Diferença
const difference = new Set([...A].filter((x) => !B.has(x)));

console.log(difference); // {1, 2}

const user1Friends = new Set(["Ana", "Carlos", "Pedro"]);

const user2Friends = new Set(["Pedro", "Maria", "Carlos"]);

// Interseção (amigos em comum)
const mutualFriends = new Set(
  [...user1Friends].filter((friend) => user2Friends.has(friend))
);

console.log(mutualFriends);
