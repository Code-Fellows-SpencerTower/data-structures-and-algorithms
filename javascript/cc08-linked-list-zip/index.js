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
    let node = new Node(newValue);
    // point to first node in list
    let current = this.head;

    if (this.head === null) {
      this.head = node;
      return this;
    }
    // iterate through linked list
    // look for end of list - find null value in list
    let traversing = true;
    while (traversing) {
      // check if current node is last in list by checking if next value is null
      // if last in list, append newNode
      if (!current.next) {
        current.next = node;
        console.log('Added new node');
        break;
      }
      // move to next node in list
      current = current.next;
    }
    return this;
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

function zipLinkedLists(ll1, ll2) {
  // point to first node in list
  let current1 = ll1.head;
  let current2 = ll2.head;
  let zippedll = new LinkedList;

  // start at next

  let counter = 0;
  while (current1 || current2) {
    if (counter % 2 === 0) {
      zippedll.append(current1.value);
      console.log('Appended: ', current1.value);
      current1 = current1.next;
    } else {
      zippedll.append(current2.value);
      console.log('Appended: ', current2.value);
      current2 = current2.next;
    }
    counter += 1;
  }
  return zippedll;
}




let ll = new LinkedList();
ll.append(100);
ll.append(300);
ll.append(500);
console.log('ll: ', ll);


let ll2 = new LinkedList();
ll2.append(200);
ll2.append(400);
ll2.append(600);
console.log('ll2: ', ll2);

let zippedList = zipLinkedLists(ll, ll2);
console.log('zippedList: ', zippedList);

module.exports = { LinkedList, zipLinkedLists };
// JSON.stringify() takes object and converts it to a string


