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

  getEdgeWeight(vertex1, vertex2) {
    let vertex1Edges = graph.getNeighbors(vertex1);
    for (let i = 0; i < vertex1Edges.length; i++) {
      if (vertex1Edges[i][0] === vertex2.value) {
        return vertex1Edges[i][1];
      }
    }
  }
}

const graph = new Graph();
let kiwi = graph.addVertex('kiwi');
let apple = graph.addVertex('apple');
let banana = graph.addVertex('banana');
let grape = graph.addVertex('grape');
graph.addEdge(kiwi, apple);
graph.addEdge(kiwi, banana, 30);
graph.addEdge(kiwi, grape, 40);
// console.log("GRAPH", graph.getVertecies());
// console.log('EDGE WEIGHT', graph.getEdgeWeight(kiwi, banana));
// console.log('EDGE WEIGHT KIWI GRAPE', graph.getEdgeWeight(kiwi, grape));
// console.log('EDGE WEIGHT KIWI APPLE', graph.getEdgeWeight(kiwi, apple));
console.log('KIWI NEIGHBORS', graph.getNeighbors(kiwi));



module.exports = Graph;
