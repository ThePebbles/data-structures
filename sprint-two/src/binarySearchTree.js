var BinarySearchTree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var treeMethods = {};


treeMethods.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      treeMethods.insert.call(this.left, value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      treeMethods.insert.call(this.right, value);
    }
  }
  return value;
};

treeMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    return treeMethods.contains.call(this.left, value);
  }
  if (value > this.value) {
    return treeMethods.contains.call(this.right, value);
  }
  return false;
};

treeMethods.depthFirstLog = function(callback) {
  this.value = callback(this.value);
  if (this.left) {
    this.left = treeMethods.depthFirstLog.call(this.left, callback);
  }
  if (this.right) {
    this.right = treeMethods.depthFirstLog.call(this.right, callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
