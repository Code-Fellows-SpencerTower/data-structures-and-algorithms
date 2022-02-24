'use strict';

let { BinarySearchTree } = require('../binarytree');
let { HashTable, treeIntersection } = require('../index');


describe('Testing treeIntersection function', () => {

  it('Should return values that are in both trees', () => {
    let tree1 = new BinarySearchTree();
    tree1.add(6);
    tree1.add(7);
    tree1.add(15);
    tree1.add(5);
    let tree2 = new BinarySearchTree();
    tree2.add(6);
    tree2.add(8);
    tree2.add(15);
    tree2.add(11);
    let hashtable = new HashTable(1024);
    let repeatValues = treeIntersection(tree1, tree2, hashtable);
    expect(repeatValues).toEqual(['6', '15']);
  });

  it('Should return an error message if one or both trees do not contain values', () => {
    let tree1 = new BinarySearchTree();
    let tree2 = new BinarySearchTree();
    tree2.add(6);
    tree2.add(8);
    tree2.add(15);
    tree2.add(11);
    let hashtable = new HashTable(1024);
    let repeatValues = treeIntersection(tree1, tree2, hashtable);
    expect(repeatValues).toEqual('Error');
  });
});
