

// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this[node]) {
    return true;
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  delete this[node];
  _.each(this, function(curNode) {
    var index = curNode.indexOf(node);
    if (index !== undefined) {
      curNode.splice(index, 1);
    }
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var result = false;
  _.each(this[fromNode], function(curNode) {
    if (curNode === toNode) {
      result = true;
    }
  })
  return result;
}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].push(toNode);
  this[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var index = this[fromNode].indexOf(toNode);
  this[fromNode].splice(index, 1);
  index = this[toNode].indexOf(fromNode);
  this[toNode].splice(index, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this, function(value, key) {
    key = cb(key);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


