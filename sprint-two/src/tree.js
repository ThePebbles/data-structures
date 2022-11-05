var Tree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = new Tree(value);
  this.children.push(child);
};

//return true if value in tree
//return false if value not in tree
//detect children

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    return true;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      result = treeMethods.contains.call(this.children[i], target);
      if (result === true) {
        return true;
      }
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
