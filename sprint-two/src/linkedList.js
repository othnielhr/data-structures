var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = newNode;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    if (list.head.next !== null) {
      list.head = list.head.next;
    }
    return temp;
  };

  list.contains = function(target) {
    var currentNode = list.head;
    while (currentNode.next !== null) {
      if (currentNode.value === target) {
        return true;
      } else {
        currentNode = currentNode.next;
      }
    }
    if (currentNode.value === target) {
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
time complexity for addToTail() = constant time O(1);
time complexity for removeHead() = constant time O(1);
time commplexity for contains() = linear O(n);
 */