'use strict';

// class Vertex {
//   constructor(value) {
//     this.value = value;
//   }
// }

class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  size() {
    return this.adjacencyList.size;
  }

  addVertex(value) {
    // const vertex = new Vertex(value);
    this.adjacencyList.set(value, []);
    return value;
  }

  addEdge(vertex1, vertex2, weight = null) {
    // get vertex1 and then push vertex2 to its array
    try {
      this.adjacencyList.get(vertex1).push([vertex2, weight]);
      this.adjacencyList.get(vertex2).push([vertex1, weight]);
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
    let vertex1Edges = this.getNeighbors(vertex1);
    console.log('VERTEX 1', vertex1);
    console.log('VERTEX 1 NEIGHBORS', vertex1Edges);
    console.log('VERTEX 2', vertex2);
    for (let i = 0; i < vertex1Edges.length; i++) {
      console.log('VERTEX EDGE', vertex1Edges[1][0]);
      if (vertex1Edges[i][0] === vertex2) {
        console.log('VERTEX 1 WEIGHT', vertex1, vertex1Edges[i][1]);
        let weight = vertex1Edges[i][1];
        console.log('WEIGHT', weight, vertex2);
        return weight;
      }
    }
  }
}

function businessTrip(graph, cityArr) {
  // set cost variable
  let cost = 0;
  console.log('City ARR', cityArr);
  // checked edges
  // loop through city array
  if (cityArr.length > 1) {
    for (let i = 0; i < cityArr.length - 1; i++) {
      console.log('cityArr[i]', cityArr[i]);
      console.log('cityArr[i+1]', cityArr[i + 1]);
      // if i+1 in neighbors, getweight, add to counter
      let edgeWt = graph.getEdgeWeight(cityArr[i], cityArr[i + 1]);
      // push edge to edgesChecked array
      console.log('EDGE WT', edgeWt);
      cost += edgeWt;
      console.log('RUNNING COST', cost);
    }
  }
  return cost;
}

let graph = new Graph();

let cityArr = [
  'Metroville',
  'Arendelle',
  'New Monstropolis',
  'Naboo',
  'Pandora',
  'Narnia',
];

cityArr.forEach((city) => graph.addVertex(city));

graph.addEdge('Metroville', 'Pandora', 82);
graph.addEdge('Metroville', 'Arendelle', 99);
graph.addEdge('Metroville', 'New Monstropolis', 105);
graph.addEdge('Metroville', 'Naboo', 26);
graph.addEdge('Metroville', 'Narnia', 37);
graph.addEdge('Arendelle', 'Pandora', 150);
graph.addEdge('Arendelle', 'New Monstropolis', 42);
graph.addEdge('New Monstropolis', 'Naboo', 73);
graph.addEdge('Naboo', 'Narnia', 250);

// let cost = businessTrip(graph, cityArr);
// let cost2 = businessTrip(graph, ['Metroville', 'Pandora']);
let cost3 = businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo']);
// console.log('COST', cost);
// console.log('COST2', cost2);
console.log('COST3', cost3);


module.exports = Graph;
