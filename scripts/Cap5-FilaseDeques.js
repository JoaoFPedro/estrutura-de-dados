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
    peek(){
        return this.items[this.lowestCount]
    }
    isEmpty(){
        return this.count - this.lowestCount === 0
        //return this.size()===0
    }
}  

const queue = new Queue();

queue.enqueue('John');
queue.enqueue('Jack');

console.log(queue)

queue.denqueue()

console.log(queue.isEmpty())

