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

  append(newValue) {
    // create new node with value
    let newNode = new Node(newValue);

    // point to first node in list
    let currentNode = this.head;
    // iterate through linked list
    // look for end of list - find null value in list
    while (currentNode) {
      // check if current node is last in list by checking if next value is null
      // if last in list, append newNode
      if (currentNode.next.value === null) {
        currentNode.next = newNode;
      }
      // move to next node in list
      currentNode = currentNode.next;
    }
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

  kth(k) {
    let listLength = 0;
    let current = this.head;
    let targetPos;
    let targetVal;

    // find length of linked list
    while (current.next) {
      listLength += 1;
      if (current.next) {
        current = current.next;
      }
    }

    // check if k is greater than list length, throw error
    if (k > listLength) {
      throw 'Position provided is greater than the lenght of the list';
    } else if (k < 0) {
      throw 'k must be a positive integer';
    }
    targetPos = listLength - k;
    current = this.head;

    for (let i = 0; i < targetPos; i += 1) {
      current = current.next;
    }
    targetVal = current.value;
    return targetVal;
  }
}



module.exports = LinkedList;


