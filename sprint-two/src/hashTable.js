

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
  } else {
    this._storage.get(index).push([k, v]);
  }
  // this._storage.set(index, v);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //go to index
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
  //loop through the bucket at that index
  //compare each 0th element to the input key
  //if we find the key
    //return the value (element at index 1 of current tuple)
    
  // return this._storage.get(index);
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