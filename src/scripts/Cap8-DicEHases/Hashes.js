class HashTable {
  constructor(toStrFn = Dictionary.defaultToString) {
    this.toStrFn = toStrFn; // Função de conversão de chave
    this.table = {}; // Inicialização da tabela hash
  }
  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }
    return hash % 37;
  }
  hashcode(key) {
    this.loseloseHashCode(key);
  }
}
