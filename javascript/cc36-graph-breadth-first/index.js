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

  getVertices() {
    return Array.from(this.adjacencyList.keys()).length >= 1 ? Array.from(this.adjacencyList.keys()) : null;
  }

  // returns Vertices in breadth first order
  breadthFirst(startingVert) {
    let visited = [];
    let queue = [];
    queue.push(startingVert);

    while (queue.length > 0) {
      // pull first vertex from queue
      let vertex = queue.shift();
      // get neighbors
      let neighbors = this.adjacencyList.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited[neighbor]) {
          visited.push(neighbor);
          queue.push(neighbor);
        }
      }
    }
    return visited;
  }
}


module.exports = Graph;
