var BinarySearchTree = function(value) {
  var newTree = Object.create(binaryTreeMethods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree;
};

var binaryTreeMethods = {};


binaryTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value);
    } else {
      binaryTreeMethods.insert.call(this.left, value);
    }
  }
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value);
    } else {
      binaryTreeMethods.insert.call(this.right, value);
    }
  }
  return value;
};

binaryTreeMethods.contains = function (value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value) {
    return binaryTreeMethods.contains.call(this.left, value);
  }
  if (value > this.value) {
    return binaryTreeMethods.contains.call(this.right, value);
  }
  return false;
};

binaryTreeMethods.depthFirstLog = function(callback) {
  this.value = callback(this.value);
  if (this.left) {
    this.left = binaryTreeMethods.depthFirstLog.call(this.left, callback);
  }
  if (this.right) {
    this.right = binaryTreeMethods.depthFirstLog.call(this.right, callback);
  }
};
/*
 * Complexity: What is the time complexity of the above functions?
 */
