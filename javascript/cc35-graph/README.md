# Graph

## Challenge Summary

Implement your own Graph. The graph should be represented as an adjacency list, and should include the following methods:

- add node
  - Arguments: value
  - Returns: The added node
  - Add a node to the graph
- add edge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - If specified, assign a weight to the edge
  - Both nodes should already be in the Graph
- get nodes
  - Arguments: none
  - Returns all of the nodes in the graph as a collection (set, list, or similar)
- get neighbors
  - Arguments: node
  - Returns a collection of edges connected to the given node
  - Include the weight of the connection in the returned collection
- size
  - Arguments: none
  - Returns the total number of nodes in the graph

## Approach & Efficiency

- addVertex
  - Arguments: value
  - Returns: The added vertex
  - Adds vertex to the graph
  - Big O: O(n)
- addEdge
  - Arguments: 2 nodes to be connected by the edge, weight (optional)
  - Returns: nothing
  - Adds a new edge between two nodes in the graph
  - Adds weight for each edge, if no weight is provided, weight defaults to null
  - Big O: O(n)
- getVerticies
  - Arguments: none
  - Returns all of the nodes in the graph as a list
- getNeighbors
  - Arguments: node, boolean (optional)
  - returns edges connected to given vertex and their weights by default
  - returns only connected edges if `false` passed in as second parameter
  - Big O: O(n)
- size
  - Arguments: none
  - Returns the total number of vertices in the graph
  - Big O: O(n)
- getEdgeWeight
  - Arguments: vertex1, vertex2
  - Returns the weight of the edge for the two given vertices
  - Big O: O(n)

## Resources

- JavaScript Algorithms and Data Structures Masterclass by Colt Steele - Udemy
