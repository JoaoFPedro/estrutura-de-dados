class HashTable {
  constructor(size = 10) {
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  // Função hash simples
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.buckets.length;
  }

  // Inserir ou atualizar um valor
  set(key, value) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket[i][1] = value; // Atualiza o valor se a chave já existir
        return;
      }
    }
    bucket.push([key, value]);
  }

  // Recuperar um valor
  get(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        return bucket[i][1];
      }
    }
    return undefined; // Retorna undefined se a chave não for encontrada
  }

  // Remover um valor
  remove(key) {
    const index = this._hash(key);
    const bucket = this.buckets[index];

    for (let i = 0; i < bucket.length; i++) {
      if (bucket[i][0] === key) {
        bucket.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}

// Exemplo de uso
const hashTable = new HashTable();
hashTable.set("nome", "Alice");
hashTable.set("emoN", "Bob"); // Pode causar colisão se o hash for simples
console.log(hashTable.get("nome")); // "Alice"
console.log(hashTable.get("emoN")); // "Bob"
hashTable.remove("nome");
console.log(hashTable.get("nome")); // undefined
