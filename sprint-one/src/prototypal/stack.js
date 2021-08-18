var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instance = Object.create(stackMethods);
  instance.top = 0;
  instance.storage = {};
  return instance;
};

var stackMethods = {};
stackMethods.push = function(string) {
  this.storage[this.top] = string;
  this.top++;
};
stackMethods.pop = function() {
  var returnVal = this.storage[this.top - 1];
  delete this.storage[this.top - 1];
  if (this.top > 0) {
    this.top--;
  }
  return returnVal;
};
stackMethods.size = function() {
  return this.top;
};


