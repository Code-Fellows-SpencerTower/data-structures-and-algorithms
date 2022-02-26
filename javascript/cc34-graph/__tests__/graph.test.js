'use strict';

const Graph = require('../index');

describe('Tests Graph class', () => {
  it('Node can be successfully added to the graph', () => {
    const graph = new Graph();
    const vertex = graph.addNode('kiwi');
    expect(vertex.value).toEqual('kiwi');
  });
  it('Should return a size of 1 if 1 node is added to the graph', () => {
    const graph = new Graph();
    graph.addNode('kiwi');
    expect(graph.size()).toEqual(1);
  });

  it('Should return a size of 2 if 2 nodes are added to the graph', () => {
    const graph = new Graph();
    graph.addNode('kiwi');
    graph.addNode('banana');
    expect(graph.size()).toEqual(2);
  });

  it('Should return a size of 3 if 3 nodes are added to the graph', () => {
    const graph = new Graph();
    graph.addNode('kiwi');
    graph.addNode('banana');
    graph.addNode('apple');
    expect(graph.size()).toEqual(3);
  });
  // it('An edge can be successfully added to the graph', () => {

  //   expect().to();
  // });
  // it('A collection of all nodes can be properly retrieved from the graph', () => {
  //   const graph = new Graph();
  //   graph.addNode('kiwi');
  //   graph.addNode('banana');
  //   expect(graph.getNodes()).toEqual(['kiwi', 'banana']);
  // });
  // it('All appropriate neighbors can be retrieved from the graph', () => {

  //   expect().to();
  // });
  // it('Neighbors are returned with the weight between nodes included', () => {

  //   expect().to();
  // });

  // it('The proper size is returned, representing the number of nodes in the graph', () => {
  //   const graph = new Graph();
  //   const vertex = graph.addNode();
  //   expect(graph.size()).toEqual(1);
  // });





  // it('A graph with only one node and edge can be properly returned', () => {

  //   expect().to();
  // });

  // it('An empty graph properly returns null', () => {

  //   expect().to();
  // });
});
