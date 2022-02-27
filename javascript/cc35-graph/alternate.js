class Vertex {
  constructor(value) {
    this.value = value;
  }
}

// uses Object instead of Map constructor for adjacency list
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  size() {
    return Object.keys(this.adjacencyList).length;
  }

  addVertex(value) {
    const vertex = new Vertex(value);
    this.adjacencyList[vertex] = [];
    return vertex;
  }

  addEdge(vertex1, vertex2, weight) {
    // get vertex1 and then push vertex2 to its array
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
    if (weight) {
      this.adjacencyList[vertex1].push(vertex2);
    }

  }

  getNeighbors(vertex) {
    return this.adjacencyList[vertex];
  }

  getVertecies() {
    return Object.keys(this.adjacencyList);
  }
}

const graph = new Graph();
graph.addVertex('kiwi');
let banana = graph.addVertex('banana');
let kiwi = graph.addVertex('kiwi');
let apple = graph.addVertex('apple');
graph.addEdge(kiwi, apple);
graph.addEdge(kiwi, banana);
console.log('GRAPH SIZE', graph.size());
console.log('GET VERTICIES', graph.getVertecies());
console.log('GET NEIGHBORS KIWI:', graph.getNeighbors(kiwi));
console.log('GET NEIGHBORS APPLE:', graph.getNeighbors(apple));
