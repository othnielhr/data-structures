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



/*
 * Complexity: What is the time complexity of the above functions?
time complexity for addChild = constant, O(1);
time complexity for contains = linear, O(n);
 */
