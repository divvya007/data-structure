//  queue data structure

class Queue {
  #queueArray = [];
  constructor(queueArray) {
    this.#queueArray = [];
  }
  queue(value) {
    if (value === undefined) {
      alert("cannot add undefined");
    } else {
      this.#queueArray.push(value);
      return this.#queueArray[this.#queueArray.length - 1];
    }
  }
  deQueue() {
    if (this.#queueArray.length === 0) {
      alert("queue is empty add more values to deQueue");
    } else {
      let deQueuedValue;
      deQueuedValue = this.#queueArray.shift();
      return deQueuedValue;
    }
  }
}

let someElementToBeQueued = new Queue();
console.log(someElementToBeQueued);
