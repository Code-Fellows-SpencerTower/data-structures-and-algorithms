'use strict';

class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.size = 0;
  }

  push(value) {
    let node = new Node(value);
    if (this.top === null) {
      this.top = node;
      this.size += 1;
      return;
    } else {
      node.next = this.top;
      this.top = node;
      this.size += 1;
    }
  }

  pop() {
    try {
      if (this.top === null) {
        throw 'Stack is already empty';
      } else {
        let temp = this.top;
        let tempVal = temp.value;
        this.top = temp.next;
        temp.value = null; // could also do temp.next = null to delete temp by severing connection - if doesnt contain reference to any data in memory, it will be 'garbage cleaned' / deleted
        this.size -= 1;
        return tempVal;
      }
    } catch (err) {
      console.log(err);
    }
  }

  peek() {
    try {
      if (this.top === null) {

        throw 'Stack is already empty';
      } else {
        return this.top.value;
      }
    } catch (err) {
      console.log(err);
    }
  }
}


class PseudoQueue {
  // 2 stack instances to create and manage the queue
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  // adds nodes to queue
  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.stack1 = node;
      this.stack2 = node;
      return;
    } else {
      let temp = this.stack2;
      this.stack2 = node;
      temp.next = node;
      return;
    }
  }

  // remove nodes from queue
  dequeue() {

    try {
      if (!this.front) {
        this.back = null;
        throw 'Queue is already empty';
      }
      let nodeToRemove = this.front;
      this.front = nodeToRemove.next;
      nodeToRemove.next = null; // removes node
      return;
    } catch (err) {
      console.log(err);
    }
  }
}


let pseudoq = new PseudoQueue();
console.log(pseudoq);