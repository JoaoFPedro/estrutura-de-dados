import { defaultToString, ValuePair } from "./utils";
class Dictionary<K, V> {
  private table: { [key: string]: ValuePair<K, V> };

  constructor(private toStrFn: (key: K) => string = defaultToString) {
    this.table = {};
  }
  static defaultToString(item: any): string {
    if (item === null) {
      return "NULL";
    } else if (item === undefined) {
      return "UNDEFINED";
    } else if (typeof item === "string" || item instanceof String) {
      return `${item}`;
    }
    return item.toString();
  }
  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }
  set(key, value) {
    if (key !== null && value !== null) {
      const tableKey = this.toStrFn(key);
      this.table[tableKey] = new ValuePair(key, value);
    }
  }
}

var dic = new Dictionary();
console.log("dic", dic.hasKey(1));
console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
