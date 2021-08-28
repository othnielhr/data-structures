

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
    for (var i = 0; i < this._storage.get(index).length; i++) {
      if (this._storage.get(index)[i][0] === k) {
        this._storage.get(index)[i] = [k, v];
      } else {
        this._storage.get(index).push([k, v]);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  if (this._storage.get(index) === undefined) {
    return undefined;
  }
  for (var i = 0; i < this._storage.get(index).length; i++) {
    if (this._storage.get(index)[i][0] === k) {
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.each(function(bucket, storageIndex, wholeStorage) {
    if (storageIndex === index) {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === k) {
          bucket.splice(i, 1);
        }
      }
    }
  });
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert = constant time
 * retrieve = constant time
 * remove = linear time
 */