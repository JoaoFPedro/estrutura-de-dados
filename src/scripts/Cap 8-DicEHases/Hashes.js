class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
class HashTable {
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
  constructor(toStrFn = HashTable.defaultToString) {
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
    return this.loseloseHashCode(key);
  }
  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashcode(key);
      this.table[position] = new ValuePair(key, value);

      return true;
    }
    return false;
  }
  get(key) {
    const valuePair = this.table[this.hashcode(key)];

    return valuePair == null ? undefined : valuePair;
  }
  remove(key) {
    if (key !== null) {
      const hash = this.hashcode(key);
      const valuePair = this.table[hash];
      delete this.table[hash];
      return true;
    }
    return false;
  }
}
const hash = new HashTable();
console.log("HASHPUT***", hash.put("Gandalf", "gandalf@gmail.com"));
console.log("HASHPUT***", hash.put("jones", "jonesPones@gmail.com"));

console.log("HASH**", hash);
console.log("HASHGET***", hash.get("Gandalf"));

hash.remove("Gandalf");
console.log("HASHAFTER****", hash);
