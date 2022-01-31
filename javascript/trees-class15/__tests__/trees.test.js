'use strict';

const { BinarySearchTree } = require('../index.js');


// Can successfully instantiate an empty tree X
// Can successfully instantiate a tree with a single root node X
// For a Binary Search Tree, can successfully add a left child and right child properly to a node X
// Can successfully return a collection from a preorder traversal
// Can successfully return a collection from an inorder traversal
// Can successfully return a collection from a postorder traversal
// Returns true	false for the contains method, given an existing or non-existing node value X



// BinarySearchTree Tests

describe('Testing BinarySearchTree methods', () => {

  it('Should successfully instantiate an empty tree', () => {
    let tree = new BinarySearchTree();
    expect(tree.root).toEqual(null);
  });

  it('Should successfully instantiate a tree with a single root node', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(10);
    expect(tree.root.value).toEqual(5);

  });

  it('Should successfully add a left child and right child properly to a node', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(10);
    expect(tree.root.value).toEqual(5);
    expect(tree.root.left.value).toEqual(3);
    expect(tree.root.right.value).toEqual(10);
  });

  it('Should return true	false for the contains method, given an existing or non-existing node value', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(10);
    expect(tree.contains(5)).toEqual(true);
    expect(tree.contains(3)).toEqual(true);
    expect(tree.contains(10)).toEqual(true);
    expect(tree.contains(24)).toEqual(false);
  });

  it('Should successfully return a collection from a preorder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
    tree.add(4);
    tree.add(10);
    expect(tree.preOrder()).toEqual('[5, 3, 2, 4, 10]');
  });

  it('Should successfully return a collection from an inorder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
    tree.add(4);
    tree.add(10);
    expect(tree.inOrder()).toEqual('[2, 3, 4, 5, 10]');
  });

  it('Should successfully return a collection from a postorder traversal', () => {
    let tree = new BinarySearchTree();
    tree.add(5);
    tree.add(3);
    tree.add(2);
    tree.add(4);
    tree.add(10);
    expect(tree.postOrder()).toEqual('[2, 4, 3, 10, 5]');
  });
});
