var BinarySearchTree = function(value) {
  var newTree = Object.create((BinarySearchTree.newTreeMaker));
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  newTree.count = 1;

  return newTree;
};
BinarySearchTree.newTreeMaker = {};

BinarySearchTree.newTreeMaker.insert = function(value) {
  if (value === this.value) {
    this.count++;
  } else if (value > this.value) {
    if (this.right === null) {
      var newTreeNode = BinarySearchTree(value);
      this.right = newTreeNode;
    } else {
      this.right.insert(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      var newTreeNode = BinarySearchTree(value);
      this.left = newTreeNode;
    } else {
      this.left.insert(value);
    }
  }
};

BinarySearchTree.newTreeMaker.contains = function(value) {
  var isPresent = false;
  if (value === this.value) {
    isPresent = true;
    return isPresent;
  } else if (value > this.value) {
    if (this.right === null) {
      return isPresent;
    } else {
      return this.right.contains(value);
    }
  } else if (value < this.value) {
    if (this.left === null) {
      return isPresent;
    } else {
      return this.left.contains(value);
    }
  }
};

BinarySearchTree.newTreeMaker.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  } if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
time complexity for insert = logarithmic O(log n);
time complexity for contains = logarithmic O(log n);
time complexity for depthFirstLog = linear time O(n);
 */
