var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var childNode = Tree(value);
  this.children.push(childNode);
};

treeMethods.contains = function(target) {
  var hasThis = false;
  var timesThroughInnerFunction = 0;
  var node = this;
  var innerFunction = function(target, node) {
    timesThroughInnerFunction++;
    if (node.value === target) {
      hasThis = true;
      return hasThis;
    } else {
      for (var i = 0; i < node.children.length; i++) {
        var child = node.children[i];
        innerFunction(target, child);
      }
    }
  };
  innerFunction(target, node);
  return hasThis;
};

treeMethods.changeChild = function(targetNode, newValue) {
  /* if target is not within tree, return 'target not found'
     else iterate thru the tree
       if current value is equal to target
         current value equals new value*/
  if (!this.contains(targetNode)) {
    return 'target not found!';
  } else {
    if (this.value === targetNode) {
      this.value = newValue;
    }
    if (this.children.length > 0) {
      console.log('it has children');
      for (var i = 0; i < this.children.length; i++) {
        console.log('child', this.children);
        this.children[i].changeChild(targetNode, newValue);
      }
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
time complexity for addChild = constant, O(1);
time complexity for contains = linear, O(n);
time complexity for changeChild = linear, O(n);
*/
