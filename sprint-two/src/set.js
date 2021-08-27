var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  this._storage[item] = item;
};


setPrototype.contains = function(item) {
  if (this._storage[item]) {
    return true;
  } return false;
};

setPrototype.remove = function(item) {
  if (this._storage[item]) {
    delete this._storage[item];
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
time complexity for add() = constant time O(1);
time complexity for contains() = constant time O(1);
time complexity for remove() = constant time O(1); 
 */
