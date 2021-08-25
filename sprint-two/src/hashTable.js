

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, v);
  // if (this._storage.get(index) === undefined) {
  //   this._storage.set(index, node);
  // } else {
  //   if (this._storage.get(index).key === k) {
  //     this._storage.set(index, node);
  //   } else {
  //     for (var i = 0; i < this._storage.get(index).length; i++) {
  //       if (this._storage.get(index).next === null) {
  //         this._storage.get(index).next = node;
  //       }
  //     }
  //   }
  // }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index);
  // for (key in this._storage.get(index)) {
  //   if (key === k) {
  //     return this._storage.get(index).value;
  //   } else if (this._storage.get(index).next !== null) {
  //   }
  // }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(item1, item2, item3) {
    if (item2 === index) {
      item3.splice(item2);
    }
  } );
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

//   a          b          c
// [{1: asdf}, {2: qwer}, {1: zxcv}]