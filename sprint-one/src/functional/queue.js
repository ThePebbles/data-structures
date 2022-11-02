var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var first = 0
  var count = 0
  // Implement the methods below
  console.log(storage);
  someInstance.enqueue = function(value) {
    storage[count] = value;
    count += 1
    return count
  };

  someInstance.dequeue = function() {
    var oldValue = storage[first];
    delete storage[first];
    if (first < count) {
      first += 1;
    }
    return oldValue;
  };

  someInstance.size = function() {
    return count - first;
  };

  return someInstance;
};
