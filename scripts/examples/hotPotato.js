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
    hotPotato(elementList, num){
        const queue = new Queue()
        const eliminatedList = []
    
        for(let i = 0; i < elementList.length; i++){
            queue.enqueue(elementList[i])
           
        }
        console.log(elementList)
        while(queue.size() > 1){
            for(let i = 0; i < num; i++){
                queue.enqueue(queue.denqueue())
            }
            eliminatedList.push(queue.denqueue())
            console.log(eliminatedList)
            
        }
       
       return {
        eliminated: eliminatedList,
        winner: queue.denqueue()
       }
       
    }


    
}  
const queue = new Queue()
const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl']
const result = queue.hotPotato(names,7)
result.eliminated.forEach(name => {
    console.log(`${name} was eliminated from the Hot Potato game.`);
  });
  
  console.log(`The winner is: ${result.winner}`);
