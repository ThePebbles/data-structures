var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count += 1;
    return count;
  };

  someInstance.pop = function() {
    var oldValue = storage[count - 1];
    count -= 1;
    delete storage[count];
    if (count < 0) {
      count = 0
    }
    return oldValue;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
