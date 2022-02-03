'use strict';

const { BinarySearchTree, breadthFirst } = require('../index.js');
// Testing breadthFirst Function

describe('Testing the breadthFirst Function', () => {

  it('Should return an array of tree node values in a breadth-first order', () => {
    // create tree
    let tree = new BinarySearchTree();
    tree.add(24);
    tree.add(3);
    tree.add(30);
    tree.add(13);
    expect(breadthFirst(tree)).toEqual([24, 3, 30, 13]);
  });

  it('Should return an array with a single value if there is only a root node', () => {
    let tree = new BinarySearchTree();
    tree.add(24);
    expect(breadthFirst(tree)).toEqual([24]);
  });
});
