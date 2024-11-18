 class Queue {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    enqueue(element) {
      this.items[this.count] = element;
      this.count++;
    }
}  

const queue = new Queue();

queue.enqueue('John');
queue.enqueue('Jack');

console.log(queue)