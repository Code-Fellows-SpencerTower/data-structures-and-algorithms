'use strict';

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return this.adjacencyList.size;
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList.set(vertex, []);
    return vertex;
  }

  addEdge(vertex1, vertex2, weight = null) {
    // get vertex1 and then push vertex2 to its array
    try {
      this.adjacencyList.get(vertex1).push([vertex2.value, weight]);
      this.adjacencyList.get(vertex2).push([vertex1.value, weight]);
    } catch (err) {
      console.log(err);
    }
  }

  // takes optional weight parameter to return weight
  // if weight true, returns weight
  getNeighbors(vertex, weight = true) {
    if (weight) {
      return this.adjacencyList.get(vertex);
    } else {
      let neighbors = [];
      // iterate through edges, add nieghbor to neighbors list without weight
      let edges = this.adjacencyList.get(vertex);
      edges.forEach(edge => {
        neighbors.push(edge[0]);
      });
      return neighbors;
    }
  }

  getVertecies() {
    return Array.from(this.adjacencyList.keys()).length >= 1 ? Array.from(this.adjacencyList.keys()) : null;
  }

  breadthFirst() {

  }
}


module.exports = Graph;
