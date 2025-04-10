class Dictionary {
  // Método estático para a função de conversão de chave
  static defaultToString(item) {
    if (item === null) {
      return "NULL";
    } else if (item === undefined) {
      return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }

  constructor(toStrFn = Dictionary.defaultToString) {
    this.toStrFn = toStrFn; // Função de conversão de chave
    this.table = {}; // Inicialização da tabela hash
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
      return true;
    }
    return false;
  }
  removeKey(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)];
      return true;
    }
    return false;
  }
  get(key) {
    //Ao inves de verificar se existe uma key, essa abordagem tem um custo menor de processamento por acessar metodo toStrFn apenas 1 vez
    const getValue = this.table[this.toStrFn(key)];
    return getValue != null ? getValue : null;
  }
  keyValues() {
    // return Object.values(this.table)

    //Outra forma de fazer iterando por todas as props do object table
    let valuePairs = [];
    for (const k in this.table) {
      if (this.hasKey(k)) {
        valuePairs.push(this.table[k]);
      }
    }
    return valuePairs;
  }
  keys() {
    // return this.keyValues().map((valuePair) => valuePair.key);
    const keys = [];
    const valuePairs = this.keyValues();
    for (let i = 0; i < valuePairs.length; i++) {
      keys.push(valuePairs[i]).key;
    }
  }
  values() {
    return this.keyValues().map((valuePair) => valuePair.value);
  }
}
class Grap {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.vertices = [];
    this.adjList = new Dictionary();
  }
  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v);
      this.adjList.set(v, []); //Cria uma nova entrada onde a chave é o vertice V e o valor é uma lista vazia que receberá os vertices conectados
    }
  }
}
