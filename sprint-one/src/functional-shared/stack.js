var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack.i = 0;
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push(value) {
    this.storage[this.i] = value;
    this.i++;
    return this.i;
  },
  pop() {
    this.i--;
    if (this.i < 0) {
      this.i = 0
    }
    return this.storage[this.i];
  },
  size() {
    return this.i;
  }
};


