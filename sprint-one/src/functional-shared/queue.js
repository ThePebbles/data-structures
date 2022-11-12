var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.first = 0
  queue.i = 0;
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.i] = value;
    this.i += 1;
    return this.i;
  },
  dequeue() {
    var oldValue = this.storage[this.first];
    if (this.first < this.i) {
      this.first += 1;
    }
    return oldValue;
  },
  size() {
    return this.i - this.first;
  }
};


