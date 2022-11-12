class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.i = 0;
  }

  push(value) {
    this.storage[this.i] = value;
    this.i += 1;
    return this.i;
  }

  pop() {
    this.i -= 1;
    if (this.i < 0) {
      this.i = 0;
    }
    return this.storage[this.i];
  }

  size() {
    return this.i;
  }
}