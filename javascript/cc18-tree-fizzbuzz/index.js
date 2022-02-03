'use strict';

// let treeify = require('treeify');

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



module.exports = { KaryTree, treeFizzBuzz, Node };
