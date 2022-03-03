'use strict';

const Graph = require('../index');

describe('Tests Graph class', () => {

  it('An empty graph properly returns null', () => {
    const graph = new Graph();
    expect(graph.getVertices()).toEqual(null);
  });

  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addVertex('kiwi');
    expect(vertex.value).toEqual('kiwi');
  });
  it('Should return a size of 1 if 1 node is added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('kiwi');
    expect(graph.size()).toEqual(1);
  });

  it('Should return a size of 2 if 2 nodes are added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('kiwi');
    graph.addVertex('banana');
    expect(graph.size()).toEqual(2);
  });

  it('Should return a size of 3 if 3 nodes are added to the graph', () => {
    const graph = new Graph();
    graph.addVertex('kiwi');
    graph.addVertex('banana');
    graph.addVertex('apple');
    expect(graph.size()).toEqual(3);
  });

  it('A collection of all nodes can be properly retrieved from the graph', () => {
    const graph = new Graph();
    let kiwi = graph.addVertex('kiwi');
    let banana = graph.addVertex('banana');
    expect(graph.getVertices()).toEqual([kiwi, banana]);
  });

  it('An edge can be successfully added to the graph', () => {
    const graph = new Graph();
    let kiwi = graph.addVertex('kiwi');
    let banana = graph.addVertex('banana');
    graph.addEdge(kiwi, banana);
    expect(graph.adjacencyList.get(kiwi)[0]).toEqual(['banana', null]);
  });

  it('All neighbors for a vertex can be retrieved from the graph', () => {
    const graph = new Graph();
    let kiwi = graph.addVertex('kiwi');
    let banana = graph.addVertex('banana');
    let apple = graph.addVertex('apple');
    graph.addEdge(kiwi, banana);
    graph.addEdge(kiwi, apple);
    expect(graph.getNeighbors(kiwi, false)).toEqual(['banana', 'apple']);
    expect(graph.getNeighbors(banana, false)).toEqual(['kiwi']);
    expect(graph.getNeighbors(apple, false)).toEqual(['kiwi']);
  });
  it('Neighbors are returned with the weight between nodes included', () => {
    const graph = new Graph();
    let kiwi = graph.addVertex('kiwi');
    let banana = graph.addVertex('banana');
    let apple = graph.addVertex('apple');
    graph.addEdge(kiwi, banana, 30);
    graph.addEdge(kiwi, apple, 40);
    expect(graph.getNeighbors(kiwi)).toEqual([['banana', 30], ['apple', 40]]);
    expect(graph.getNeighbors(banana)).toEqual([['kiwi', 30]]);
    expect(graph.getNeighbors(apple)).toEqual([['kiwi', 40]]);
  });
});
