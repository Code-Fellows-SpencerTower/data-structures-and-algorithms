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
  insert(value) {
    // empty linked list {head: null}
    let node = new Node(value);
    // shift head to next node
    node.next = this.head;
    // set head to inserted node
    this.head = node;
  }

  includes(value) {
    let currentNode = this.head;
    // iterate through linked list
    while (currentNode.next) {
      // if current nodes value equals value, return true
      if (currentNode.value === value) {
        return true;
      }
      // move to next node
      currentNode = currentNode.next;
    }
    // if value not found in list, return false
    return false;
  }

  // adapted from: https://stackoverflow.com/questions/46865448/tostring-method-on-linked-list-implementation-not-working-in-js
  toString() {
    let listString = String(this.value);
    if (this.next) {
      // "{ a } -> { b } -> { c } -> NULL"
      listString = listString + ' -> ' + String(this.next);
    }
    return listString;
  }

  // append
  // arguments: new value
  // adds a new node with the given value to the end of the list

  append(value) {
    let
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified

  insertBefore(value, newValue) {
    let currentNode = this.head;
    let node = new Node(newValue);
    // iterate through linked list
    while (currentNode.next) {
      // if current nodes value equals value, return true
      if (currentNode.next.value === value) {
        currentNode = node;
        return;
      }
      // move to next node
      currentNode = currentNode.next;
    }
    // if value not found in list, return false
    return 'value not found';

  }

  insertAfter(value, newValue) {
    
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

