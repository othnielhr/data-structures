var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  // LIFO - last in first out
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var key;
    if (Object.keys(storage).length === 0) {
      key = 1;
      storage[key] = value;
    }else {
      key = Object.keys(storage).length + 1;
      storage[key] = value;
    }
  };

  someInstance.pop = function() {
    var key = Object.keys(storage).length;
    var returnVal = storage[key];
    delete storage[key];
    return returnVal;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};