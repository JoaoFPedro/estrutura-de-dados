// class Stack {
//     constructor () {
//         this.items = []

//     }
//     isEmpty() {
//         return  this.items.length === 0;
//         }

//     push(index){
//         return this.items.push(index)
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length -1]
//     }
//     size() {
//         return this.items.length
//     }

//     clear(){
//         return this.items = []
//     }
// }
// const stack = new Stack()
// console.log(stack.isEmpty())

// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// stack.pop()

// console.log(stack)

// console.log('Ultimo elemento:',stack.peek())

// console.log('Numero de elementos contidos na pilha:',stack.size())

// // stack.clear()

// // console.log('Array dps do clear', stack)


class Stack {
    constructor () {
        this.count = 0
        this.items = {}

    }
    isEmpty() {
        return  this.items.lenght === 0
        }

    push(element){
        this.items[this.count] = element
        this.count ++
    }
    pop(){
         if(this.isEmpty()){
            return undefined
         }
         this.count--
         const result = this.items[this.count]
         delete this.items[this.count]

         return result
    }
    peek(){
        return this.items[this.count -1]
    }
    size() {
        return this.count
    }

    clear(){
        this.items = {}
        this.count = 0
    }
}
const stack = new Stack()
stack.push(5)
stack.push(8)
stack.push(3)
stack.push(2)
stack.push(1)




stack.pop()
console.log(stack.clear())
console.log('Pilha apos o metodo clear()',stack)
console.log('Is Empty?',stack.isEmpty())