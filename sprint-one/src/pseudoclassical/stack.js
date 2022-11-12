var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.i = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.i] = value;
  this.i += 1;
};

Stack.prototype.pop = function() {
  this.i -= 1;
  if (this.i < 0) {
    this.i = 0;
  }
  return this.storage[this.i];
};

Stack.prototype.size = function() {
  return this.i;
};

