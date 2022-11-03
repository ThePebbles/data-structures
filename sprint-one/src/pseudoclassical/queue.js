var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.i = 0;
  this.first = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.i] = value;
  this.i += 1;
  return this.i;
};

Queue.prototype.dequeue = function() {
  var oldValue = this.storage[this.first];
  if (this.first < this.i) {
    this.first += 1;
  }
  return oldValue;
};

Queue.prototype.size = function() {
  return this.i - this.first;
};
