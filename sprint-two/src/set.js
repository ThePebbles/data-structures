var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (this['_storage'][item] === undefined) {
    this['_storage'][item] = 1
  } else {
    this['_storage'][item]++;
  }
};

setPrototype.contains = function(item) {
  var result = false;
  _.each(this['_storage'], function(val, key) {
    if (key === item) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(item) {
  delete this['_storage'][item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
