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
    size (){
        return this.count - this.lowestCount
    }
    clear(){
        this.items =  {}
        this.lowestCount = 0
        this.count = 0
    }
    toString(){
        let objString = `${this.items[this.lowestCount]}`
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}  

const queue = new Queue();

queue.enqueue('John');
queue.enqueue('Jack');
queue.enqueue('Jennifer');

console.log(queue)



console.log(queue.toString())

