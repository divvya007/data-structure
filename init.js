// stack implementation

class Stack {
  #stackedArray = [];
  constructor(stackedArray) {
    this.#stackedArray = [];
  }
  push(value) {
    let firstValue;
    firstValue = this.#stackedArray.push(value);
    return firstValue;
  }
  pop() {
    if (this.#stackedArray.length === 0) {
      alert("stack is empty add more values");
    } else {
      let lastValue;
      lastValue = this.#stackedArray.pop();
      return lastValue;
    }
  }
}

let someElementToBeStacked = new Stack();

console.log(someElementToBeStacked);
console.log(Stack.stackedArray);
