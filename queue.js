//  queue data structure

class Queue {
  #queueArray = [];
  queue(value) {
    if (value === undefined) {
      throw new Error("cannot add undefined");
    }
    if (value === null) {
      throw new Error("cannot add undefined");
    }
    this.#queueArray.push(value);
    console.log("push", value);
    console.log("updated queue", this.#queueArrayStore.toString());
    return this.#queueArray[this.#queueArray.length - 1];
  }

  deQueue() {
    if (this.#queueArray.length === 0) {
      return null;
    }

    value = this.#queueArray.shift();
    console.log("shift", value);
    console.log("updated queue", this.#queueArrayStore.toString());
    return value;
  }
}

let myQueue = new Queue();

myQueue.queue(2);
myQueue.queue(5);
myQueue.queue(6);

myQueue.deQueue();

myQueue.queue({ name: "John Doe" });

myQueue.deQueue();

myQueue.queue(null);
myQueue.queue();
