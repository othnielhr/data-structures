class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.top = 0;
    this.storage = {};
  }

  push(value) {
    this.storage[this.top] = value;
    this.top++;
  }

  pop() {
    if (this.top > 0){
      var returnVal = this.storage[this.top - 1];
      delete this.storage[this.top - 1];
      this.top--;
      return returnVal;
    }
  }

  size() {
    return this.top;
  }
}

var instance = new Stack();