var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var key;
    var val = value;
    var sizes = Object.keys(storage).length;
    if (_.isEmpty(storage)) {
      key = 1;
      storage[key] = val;
    } else {
      key = sizes + 1;
      storage[key] = val;
    }
  };

  someInstance.dequeue = function() {
    var sizes = Object.keys(storage).length;
    var returnVal = storage[1];
    for (var i = 1; i < sizes; i++) {
      storage[i] = storage[i + 1];
    }
    delete storage[sizes];
    return returnVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};