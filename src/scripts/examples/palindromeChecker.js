// @ts-check

 class Deque {
    constructor() {
      this.count = 0;
      this.lowestCount = 0;
      this.items = {};
    }
  
    addFront(element) {
      if (this.isEmpty()) {
        this.addBack(element);
      } else if (this.lowestCount > 0) {
        this.lowestCount--;
        this.items[this.lowestCount] = element;
      } else {
        for (let i = this.count; i > 0; i--) {
          this.items[i] = this.items[i - 1];
        }
        this.count++;
        this.items[0] = element;
      }
    }
  
    addBack(element) {
      this.items[this.count] = element;
      this.count++;
    }
  
    removeFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      const result = this.items[this.lowestCount];
      delete this.items[this.lowestCount];
      this.lowestCount++;
      return result;
    }
  
    removeBack() {
      if (this.isEmpty()) {
        return undefined;
      }
      this.count--;
      const result = this.items[this.count];
      delete this.items[this.count];
      return result;
    }
  
    peekFront() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.lowestCount];
    }
  
    peekBack() {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.items[this.count - 1];
    }
  
    isEmpty() {
      return this.size() === 0;
    }
  
    clear() {
      this.items = {};
      this.count = 0;
      this.lowestCount = 0;
    }
  
    size() {
      return this.count - this.lowestCount;
    }
  
    toString() {
      if (this.isEmpty()) {
        return '';
      }
      let objString = `${this.items[this.lowestCount]}`;
      for (let i = this.lowestCount + 1; i < this.count; i++) {
        objString = `${objString},${this.items[i]}`;
      }
      return objString;
    }
    palindromeChecker(asString){
        if(asString === undefined || asString === null || (asString !== null && asString.length === 0)){
            return false
        }

        const deque = new Deque();
        const lowerString = asString.toLowerCase().replace(/\s+/g, '');
        let isEqual = true
        let firstChar , lastChar
        for(let i = 0; i < lowerString.length; i++ ){
            deque.addBack(lowerString.charAt(i))
        }
        while(deque.size() > 1 && isEqual){
            firstChar = deque.removeFront()
            lastChar = deque.removeBack()
            if(firstChar !== lastChar){
                isEqual = false
            }
        }
        return isEqual
    }

  }
  const deque = new Deque()

  console.log('arara', deque.palindromeChecker('arara'))
  