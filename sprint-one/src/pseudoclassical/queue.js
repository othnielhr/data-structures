var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.bottom = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.bottom] = value;
  this.bottom++;
};

Queue.prototype.dequeue = function() {
  if (this.front < this.bottom) {
    var returnVal = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;
    return returnVal;
  }
};

Queue.prototype.size = function() {
  return this.bottom - this.front;
};

var instance = new Queue();

