var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  var isPresent = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      isPresent = true;
    }
  }
  if (!isPresent) {
    this._storage.push(item);
  }
};

setPrototype.contains = function(item) {
  var isPresent = false;
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      isPresent = true;
    }
  }
  return isPresent;
};

setPrototype.remove = function(item) {
  for (var i = 0; i < this._storage.length; i++) {
    if (this._storage[i] === item) {
      if (i === this._storage.length - 1) {
        this._storage.pop();
      } else {
        for (var j = i; j < this._storage.length - 1; j++) {
          this._storage[j] = this._storage[j + 1];
        }
        this._storage.pop();
      }
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
time complexity for add() = linear time O(n);
time complexity for contains() = linear time O(n);
time complexity for remove() = linear time O(n);

 */
