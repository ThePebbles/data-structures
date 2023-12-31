// 0: ['key1', 'val], ['key2', val]
// 1: ['key, 'val']
// 2:
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  if (typeof k !== 'number' && typeof k !== 'string') {
    return undefined;
  }
  var index = getIndexBelowMaxForKey(k, this._limit);
  var array = [];
  if (!this['_storage'].get(index)) {
    this['_storage'].set(index, array);
  }
  for ( var i = 0; i < this['_storage'].get(index).length; i++) {
    if (this['_storage'].get(index)[i][0] === k) {
      this.remove(k);
    }
  }
  this['_storage'].get(index).push([k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this['_storage'].get(index)) {
    for ( var i = 0; i < this['_storage'].get(index).length; i++ ) {
      if (this['_storage'].get(index)[i][0] === k) {
        return this['_storage'].get(index)[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this['_storage'].get(index).length; i++) {
    if (this['_storage'].get(index)[i][0] === k) {
      this['_storage'].get(index).splice(0, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */

