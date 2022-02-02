'use strict';

let treeify = require('treeify');

class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor() {
    this.root = null;
  }

  // add tree nodes - update to be dynamic
  add(tree) {
    this.root = tree;
  }
}

function treeFizzBuzz(tree) {
  function traverse(node) {
    if (node.children[0]) {
      for (let i = 0; i < node.children.length; i += 1) {
        traverse(node.children[i]);
      }
    }
    try {
      if ((node.value % 3 === 0) && (node.value % 5 === 0)) {
        node.value = 'FizzBuzz';
      } else if (node.value % 3 === 0) {
        node.value = 'Fizz';
      } else if (node.value % 5 === 0) {
        node.value = 'Buzz';
      } else {
        node.value = String(node.value);
      }
    } catch (e) {
      console.log(e);
    }
  }
  traverse(tree.root);
  return tree;
}




// // create nodes for tree
// let n1 = new Node(10);
// let n2 = new Node(3);
// let n3 = new Node(5);
// let n4 = new Node(18);
// let n5 = new Node(15);
// let n6 = new Node(7);
// let n7 = new Node(25);
// let n8 = new Node(17);
// let n9 = new Node(9);
// let n10 = new Node(20);
// let n11 = new Node(30);
// let n12 = new Node(15);
// let n13 = new Node(6);
// // assign child nodes
// n1.children = [n2, n3];
// n2.children = [n4];
// n3.children = [n8, n9, n12, n13];
// n5.children = [n7, n6];
// n8.children = [n5, n10, n11];
// console.log(n8);
// add root node to tree
// let tree = new KaryTree();
// tree.add(n1);
// // console.log(tree);
// let treeifyTree = treeify.asTree(tree, true); // visualize structure
// // console.log(treeifyTree);
// let fizzedTree = treeFizzBuzz(tree);
// console.log(fizzedTree);
// console.log(fizzedTree.root.value);
// let fizzBuzzTree = treeify.asTree(tree, true); // visualize structure
// // console.log(fizzBuzzTree);

module.exports = { KaryTree, treeFizzBuzz, Node };
