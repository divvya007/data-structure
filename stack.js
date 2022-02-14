// stack implementation

class Stack {
  #stackedArrayStore = [];

  push(value) {
    if (value === undefined) {
      throw new Error("Cannot add undefined");
    }

    if (value === null) {
      throw new Error("Cannot add null");
    }

    this.#stackedArrayStore.push(value);
    console.log("push", value);
    console.log("updated stack", this.#stackedArrayStore.toString());
    return this.#stackedArrayStore[this.#stackedArrayStore.length - 1];
  }

  pop() {
    if (this.#stackedArrayStore.length === 0) {
      return null;
    }

    let value = this.#stackedArrayStore.pop();
    console.log("pop", value);
    console.log("updated stack", this.#stackedArrayStore.toString());
    return value;
  }
}

let myStack = new Stack();

myStack.push(5);
myStack.push(8);
myStack.push(2);

myStack.pop();
myStack.pop();

myStack.push("str");
myStack.push({ a: "b" });

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

// error
// myStack.push();
// myStack.push(null);
