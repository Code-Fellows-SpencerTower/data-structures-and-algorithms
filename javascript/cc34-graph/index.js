'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// make Edge class

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return this.adjacencyList.size;
  }

  addNode(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge() {

  }

  getNeighbors() {

  }

  getNodes() {
    return Array.from(this.adjacencyList.keys());
  }
}


module.exports = Graph;
