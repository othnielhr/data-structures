var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.top = 0;
  this.storage = {};
};

Stack.prototype.push = function(value) {
  this.storage[this.top] = value;
  this.top++;
};

Stack.prototype.pop = function() {
  if (this.top > 0) {
    var returnVal = this.storage[this.top - 1];
    delete this.storage[this.top - 1];
    this.top--;
    return returnVal;
  }
};

Stack.prototype.size = function() {
  return this.top;
};

var instance = new Stack();


