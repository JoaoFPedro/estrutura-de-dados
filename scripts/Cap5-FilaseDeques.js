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
    denqueue() {
        const result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]

        this.lowestCount++

        return result
    }
}  

const queue = new Queue();

queue.enqueue('John');
queue.enqueue('Jack');

console.log(queue)

queue.denqueue()

