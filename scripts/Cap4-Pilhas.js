class Stack {
    constructor () {
        this.items = []

    }
    isEmpty() {
        return  this.items.length === 0;
        }

    push(index){
        return this.items.push(index)
    }
    pop(){
        return this.items.pop()
    }
    peek(){
        return this.items[this.items.length -1]
    }
    size() {
        return this.items.length
    }

    clear(){
        return this.items = []
    }
}
const stack = new Stack()
console.log(stack.isEmpty())

stack.push(1)
stack.push(2)
stack.push(3)
stack.push(4)
stack.push(5)

stack.pop()

console.log(stack)

console.log('Ultimo elemento:',stack.peek())

console.log('Numero de elementos contidos na pilha:',stack.size())

stack.clear()

console.log('Array dps do clear', stack)