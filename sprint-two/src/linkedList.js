var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.length = 0;

  list.addToTail = function(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  };

  list.removeHead = function() {
    var curHead = this.head;
    this.head = curHead.next;
    this.length--;
    if (length === 0) {
      this.tail = null;
    }
    return curHead.value;
  };

  list.contains = function(target) {
    var result = false;
    if (this.head === undefined) {
      if (this.value === target) {
        return true;
      }
    } else if (this.head.value === target) {
      return true;
    } else if (this.head.next !== undefined) {
      result = list.contains.call(this.head.next, target);
    } else if (this.next !== undefined) {
      result = list.contains.call(this.next, target);
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

/*
list
{
  value: value; //head
  next: {
    value: value,
    next: {
      value: value,
      next: {
        value: value, //tail
        next: null
      }
    }
  }
}
*/