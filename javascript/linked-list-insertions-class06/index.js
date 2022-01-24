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


  toString() {
    let listString = String(this.value);
    if (this.next) {
      // "{ a } -> { b } -> { c } -> NULL"
      listString = listString + ' -> ' + String(this.next);
    }
    return listString;
  }
  // adapted from: https://stackoverflow.com/questions/46865448/tostring-method-on-linked-list-implementation-not-working-in-js

  // append
  // arguments: new value
  // adds a new node with the given value to the end of the list

  append(newValue) {
    // create new node with value
    let node = new Node(newValue);

    // point to first node in list
    let currentNode = this.head;
    // iterate through linked list
    // look for end of list - find null value in list
    while (currentNode) {
      // check if current node is last in list by checking if next value is null
      // if last in list, append newNode
      if (currentNode.next.value === null) {
        currentNode = currentNode.next = node;
      }
      // move to next node in list
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    // this.size += 1;
  }

  // insert before
  // arguments: value, new value
  // adds a new node with the given new value immediately before the first node that has the value specified

  insertBefore(value, newValue) {

    let node = new Node(newValue);
    // point to first node in list
    let currentNode = this.head;
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

    let node = new Node(newValue);
    // point to first node in list
    let currentNode = this.head;
    // iterate through linked list
    while (currentNode.next) {
      // if current nodes value equals value, return true
      if (currentNode.next.value === value) {
        currentNode.next = node;
        return;
      }
      // move to next node
      currentNode = currentNode.next;
    }
    // if value not found in list, return false
    return 'value not found';
  }
}



module.exports = LinkedList;
// JSON.stringify() takes object and converts it to a string


