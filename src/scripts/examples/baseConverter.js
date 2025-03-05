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

function baseConverter(decNumber, base) {
    const remStack = new Stack()
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let rem
    let baseString = ''
    let number = decNumber

    if(!(base >= 2 && base <= 36)){
        return ''
    }
    while (number > 0 ){
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number/ base)
    }
    while (!remStack.isEmpty()){
        baseString += digits[remStack.pop()]
    }
    return baseString
}

console.log(baseConverter(100345, 16))