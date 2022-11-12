class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
    this.first = 0;
  }

  enqueue(value) {
    this.storage[this.i] = value;
    this.i += 1;
    return this.i;
  }

  dequeue() {
    var oldValue = this.storage[this.first];
    if (this.first < this.i) {
      this.first += 1;
    }
    return oldValue;
  }

  size() {
    return this.i - this.first;
  }
}
