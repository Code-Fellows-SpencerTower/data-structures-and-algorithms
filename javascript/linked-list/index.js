'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // take in a value and add it to our linked list
  append(value) {
    // empty linked list {head: null}
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      return;
    }

    // traversal of a linked list
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node;
  }

  includes(value) {

  }
}


let list = new LinkedList();
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(4);

// list.head = node;
// list.head.next = node2;
// list.head.next.next = node3;
// list.head.next.next.next = node4;

module.exports = LinkedList;
// JSON.stringify() takes object and converts it to a string
console.log(JSON.stringify(list));
