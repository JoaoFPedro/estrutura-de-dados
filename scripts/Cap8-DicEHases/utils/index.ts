export function defaultToString(item: any): string {
  if (item === null) {
    return "NULL";
  } else if (item === undefined) {
    return "UNDEFINED";
  } else if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }
  return item.toString();
}

export class ValuePair<K, V> {
  constructor(public key: K, public value: V) {}

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}
