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
