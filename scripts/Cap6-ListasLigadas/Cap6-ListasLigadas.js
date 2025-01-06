class Node {
  constructor(element, next) {
    this.element = element;
    this.next = next;
  }
}
function defaultEquals(a, b) {
  return a === b;
}
class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.head = undefined;
    this.equalsFn = equalsFn;
  }

  push(element) {
    const node = new Node(element);

    let current;
    console.log("letCurrent", this.head);
    if (this.head == null) {
      this.head = node;
      console.log("Head**", this.head);
    } else {
      console.log("current**", current);
      current = this.head;
      console.log("current2**", current);

      while (current.next != null) {
        current = current.next;
        console.log("WHILE**", current);
      }
      current.next = node;
      console.log("current3**", current);
    }

    this.count++;
  }
  removeAt(index) {
    if (index >= 0 && index < this.count) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        const previous = this.getElementAt(index - 1);
        current = previous.next;
        previous.next = current.next;
      }
      this.count--;
      return current.element;
    }
    return undefined;
  }
  getElementAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head;
      for (let i = 0; i < index && node != null; i++) {
        node = node.next;
      }
      return node;
    }
    return undefined;
  }
}
const list = new LinkedList();

list.push(15);
list.push(7);
list.push(22);
