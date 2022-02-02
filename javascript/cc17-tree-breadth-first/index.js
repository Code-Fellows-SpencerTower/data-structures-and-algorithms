'use strict';

let treeify = require('treeify');

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// class Queue {
//   constructor() {
//     this.front = null;
//     this.back = null;
//   }

//   // adds nodes to queue
//   enqueue(value) {
//     let node = new Node(value);

//     if (this.front === null) {
//       this.front = node;
//       this.back = node;
//       return;
//     } else {
//       let temp = this.back;
//       this.back = node;
//       temp.next = node;
//       return;
//     }
//   }

//   // remove nodes from queue
//   dequeue() {

//     try {
//       if (!this.front) {
//         this.back = null;
//         throw 'Queue is already empty';
//       }
//       let nodeToRemove = this.front;
//       this.front = nodeToRemove.next;
//       nodeToRemove.next = null; // removes node
//       return;
//     } catch (err) {
//       console.log(err);
//     }
//   }
// }

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let values = [];

    function traverse(node) {
      values.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root); // start traversing at the root
    return values; // return trees values
  }

  // traverse entire left side, then right side
  // returns values smallest to largest
  inOrder() {
    let values = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      values.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(this.root); // start traversing at the root
    return values; // return trees values
  }

  // travers to end of tree, add values in reverse
  postOrder() {
    let values = [];

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      values.push(node.value);
    }
    traverse(this.root); // start traversing at the root
    return values; // return trees values
  }
}

// left node must be less than parent
// right node must more than parent

class BinarySearchTree extends BinaryTree {
  constructor() {
    super(); // inheret properties/methods from parent class
  }
  // add check for duplicates
  add(value) {
    let node = new Node(value);
    if (this.root === null) { // check for root
      this.root = node;
      return this;
    } else {
      let current = this.root;
      let traversing = true;
      // iterate to find appropriate location for new node
      while (traversing) {
        if (node.value > current.value) {
          if (current.right === null) {
            current.right = node;
            return;
          } else {
            current = current.right;
          }
        } else if (node.value < current.value) {
          if (current.left === null) {
            current.left = node;
            return;
          } else {
            current = current.left;
          }
        }
      }
    }
  }

  contains(value) {
    if (this.root === null) { // check for root
      return false;
    }
    // iterate to find appropriate location for new node
    let current = this.root;

    while (current) {
      if (value > current.value) {
        current = current.right; // move right
      } else if (value < current.value) {
        current = current.left; // move left
      } else {
        return true;
      }
    }
    return false; // return if value not found
  }
}

function breadthFirst(tree) {
  let current = tree.root;
  let values = [];
  let queue = [];
  queue.push(current);
  console.log('queue before while loop: ', queue);
  while (queue.length >= 1) {
    current = queue.shift();
    // remove first element from queue
    values.push(current.value); // add element to values list
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
  return values;
}


let tree = new BinarySearchTree();
// tree.root = new Node(10);
console.log('Before Insert: ', tree);

console.log('Before add: ', tree);
tree.add(24);
tree.add(3);
tree.add(30);
tree.add(13);

let treeifyTree = treeify.asTree(tree, true);
console.log(treeifyTree);
console.log('After add: ', tree);
console.log('breadth first array: ', breadthFirst(tree));



module.exports = { BinarySearchTree, breadthFirst };
