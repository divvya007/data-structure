// stack implementation

class Stack {
  #stackedArrayStore = [];
  constructor(stackedArrayStore) {
    this.#stackedArrayStore = [];
  }
  push(value) {
    if (value === undefined) {
      alert("cannot add undefined");
    } else {
      this.#stackedArrayStore.push(value);
      return this.#stackedArrayStore[this.#stackedArrayStore.length - 1];
    }
  }
  pop() {
    if (this.#stackedArrayStore.length === 0) {
      alert(null);
    } else {
      let lastValue;
      lastValue = this.#stackedArrayStore.pop();
      return lastValue;
    }
  }
}

let someElementToBeStacked = new Stack();

console.log(someElementToBeStacked);
