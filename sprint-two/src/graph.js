

// Instantiate a new graph
var Graph = function() {
  this.newGraph = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {};
  newNode.value = node;
  newNode.edges = [];
  this.newGraph.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var isPresent = false;
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === node) {
      isPresent = true;
    }
  }
  return isPresent;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === node) {
      if (i === this.newGraph.length - 1) {
        for (var k = 0; k < this.newGraph[i].edges.length; k++) {
          this.removeEdge(this.newGraph[i].edges[k], node);
        }
        this.newGraph.pop();
      } else {
        for (var j = i; j < this.newGraph.length; j++) {
          if (j === this.newGraph.length - 1) {
            this.newGraph.pop();
          } else {
            newGraph[j].value = newGraph[j + 1].value;
            newGraph[j].edges = newGraph[j + 1].edges;
          }
        }
      }
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === fromNode) {
      for (var j = 0; j < this.newGraph[i].edges.length; j++) {
        if (this.newGraph[i].edges[j] === toNode) {
          return true;
        }
      }
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === fromNode) {
      this.newGraph[i].edges.push(toNode);
    }
  }
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === toNode) {
      this.newGraph[i].edges.push(fromNode);
    }
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === fromNode) {
      for (var j = 0; j < this.newGraph[i].edges.length; j++) {
        if (this.newGraph[i].edges[j] === toNode) {
          if (j === this.newGraph[i].edges - 1) {
            this.newGraph[i].edges.pop();
          } else {
            this.newGraph[i].edges[j] = this.newGraph[i].edges[j + 1];
          }
        }
      }
    }
  }
  for (var i = 0; i < this.newGraph.length; i++) {
    if (this.newGraph[i].value === toNode) {
      for (var j = 0; j < this.newGraph[i].edges.length; j++) {
        if (this.newGraph[i].edges[j] === fromNode) {
          if (j === this.newGraph[i].edges - 1) {
            this.newGraph[i].edges.pop();
          } else {
            this.newGraph[i].edges[j] = this.newGraph[i].edges[j + 1];
          }
        }
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var i = 0; i < this.newGraph.length; i++) {
    cb(this.newGraph[i].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
time complexity for addNode() = constant time O(1);
time complexity for contains() = linear time O(n);
time complexity for removeNode() = quadratic time O(n^2);
time complexity for hasEdge() = linear time O(n);
time complexity for addEdge() = linear time O(n);
time complexity for removeEdge() = linear time O(n);
time complexity for forEachNode() = linear time O(n);
 */
