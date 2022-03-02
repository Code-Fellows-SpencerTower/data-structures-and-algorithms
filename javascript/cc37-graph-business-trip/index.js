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
    let vertex1Edges = this.getNeighbors(vertex1);
    console.log('VERTEX 1 EDGES', vertex1Edges);
    for (let i = 0; i < vertex1Edges.length; i++) {
      if (vertex1Edges[i][0] === vertex2.value) {
        console.log('VERTEX 1 WEIGHT', vertex1Edges[i][1]);
        return vertex1Edges[i][1];
      }
    }
  }
}

function businessTrip(graph, cityArr) {
  // set cost variable
  let cost = 0;
  // checked edges
  let edgesChecked = [];
  // loop through city array
  if (cityArr.length > 1) {
    for (let i = 0; i < cityArr.length - 1; i++) {
      console.log('CURRENT LOCATION', cityArr[i]);
      console.log('NEXT LOCATION', cityArr[i + 1]);
      console.log('EDGES CHECKED', edgesChecked);
      console.log('COST', cost);
      // check to see if current trip is in edgesChecked, if not, check edge
      if (!edgesChecked.includes(`${cityArr[i]}:${cityArr[i + 1]}`)) {
        let edgeWt = graph.getEdgeWeight(cityArr[i], cityArr[i + 1]);
        // push edge to edgesChecked array
        edgesChecked.push(`${cityArr[i]}:${cityArr[i + 1]}`);
        cost += edgeWt;
      }
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
let cost2 = businessTrip(graph, ['Metroville', 'Pandora']);
// let cost3 = businessTrip(graph, ['Arendelle', 'New Monstropolis', 'Naboo']);
// console.log('COST', cost);
console.log('COST2', cost2);
// console.log('COST3', cost3);


module.exports = Graph;
