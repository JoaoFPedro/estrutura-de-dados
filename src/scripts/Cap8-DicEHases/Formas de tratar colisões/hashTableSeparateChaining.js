class hashTableSeparateChaining {
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
  constructor(toStrFn = hashTableSeparateChaining.defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }
}
