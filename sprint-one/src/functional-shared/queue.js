var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = {
    front: 0,
    back: 0,
    storage: {}
  };
  _.extend(instance, queueMethods);
  return instance;
};

var queueMethods = {
  enqueue: function(string) {
    this.storage[this.back] = string;
    this.back++;
  },
  dequeue: function() {
    if (this.front < this.back) {
      var val = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      return val;
    }
  },
  size: function() {
    return this.back - this.front;
  }
};