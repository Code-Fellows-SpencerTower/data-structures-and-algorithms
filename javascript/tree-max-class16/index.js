'use strict';


class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

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

  getMax() {
    let maxVal = 0;
    console.log('this tree: ', this);
    function traverse(node) {
      if (node.value > maxVal) {

        maxVal = node.value;
        console.log('maxVal: ', maxVal);
      }
      if (node.left) {
        console.log('node.left: ', node.left);
        traverse(node.left);

      }
      if (node.right) {
        console.log('node.right: ', node.right);
        traverse(node.right);
      }
    }
    traverse(this.root); // start traversing at the root
    return maxVal; // return trees values
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


let tree = new BinarySearchTree();
tree.add(5);
tree.add(10);
tree.add(3);
tree.add(4);
tree.add(15);
tree.add(30);
console.log('tree: ', tree);
console.log('tree: ', tree.preOrder());
console.log('tree.getMax()', tree.getMax());


module.exports = { BinaryTree, BinarySearchTree };
