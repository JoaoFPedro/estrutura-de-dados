// // class Stack {
// //     constructor () {
// //         this.items = []

// //     }
// //     isEmpty() {
// //         return  this.items.length === 0;
// //         }

// //     push(index){
// //         return this.items.push(index)
// //     }
// //     pop(){
// //         return this.items.pop()
// //     }
// //     peek(){
// //         return this.items[this.items.length -1]
// //     }
// //     size() {
// //         return this.items.length
// //     }

// //     clear(){
// //         return this.items = []
// //     }
// // }
// // const stack = new Stack()
// // console.log(stack.isEmpty())

// // stack.push(1)
// // stack.push(2)
// // stack.push(3)
// // stack.push(4)
// // stack.push(5)

// // stack.pop()

// // console.log(stack)

// // console.log('Ultimo elemento:',stack.peek())

// // console.log('Numero de elementos contidos na pilha:',stack.size())

// // // stack.clear()

// // // console.log('Array dps do clear', stack)


class Stack {
    constructor() {
        this.items = [];
    }
    isEmpty() {
        return  this.items.length === 0
        }

        push(element) {
            this.items.push(element);
        }
    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.pop();
    }

    
    
}

// Função para converter decimal para binário
function decimalToBinary(decNumber) {
    const ramStack = new Stack();
    let number = decNumber;
    let rem;
    let binaryString = '';
    
    // Loop para dividir o número por 2 e armazenar o resto na pilha
    while (number > 0) {
        rem = Math.floor(number % 2);
        ramStack.push(rem);
        number = Math.floor(number / 2);
    }
    
    // Loop para construir a string binária a partir dos restos na pilha
    while (!ramStack.isEmpty()) {
        binaryString += ramStack.pop().toString();
    }
    
    return binaryString;
}




console.log(decimalToBinary(10)); // Saída esperada: "1010"


// stack.push(5)
// stack.push(8)
// stack.push(3)
// stack.push(2)
// stack.push(1)




// stack.pop()
// console.log(stack.clear())
// console.log('Pilha apos o metodo clear()',stack)
// console.log('Is Empty?',stack.isEmpty())
