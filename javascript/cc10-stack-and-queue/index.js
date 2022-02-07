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

  isEmpty() {
    if (this.top === null) {
      return true;
    } else {
      return false;
    }
  }

  length() {
    return this.size;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  // adds nodes to queue
  enqueue(value) {
    let node = new Node(value);

    if (this.front === null) {
      this.front = node;
      this.back = node;
      return;
    } else {
      let temp = this.back;
      this.back = node;
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

  peek() {
    try {
      if (this.front === null) {
        throw 'Queue is already empty';
      } else {
        return this.front.value;
      }
    } catch (err) {
      console.log(err);
    }
  }

  isEmpty() {
    if (this.front === null) {
      return true;
    } else {
      return false;
    }
  }

}


// let stack = new Stack();
// stack.push(15);
// stack.push(10);
// stack.push(5);
// console.log(stack);
// console.log('peek: ', stack.peek());
// console.log('size: ', stack.length());

// console.log(stack.pop()); // removes top node, returns value of top node
// console.log(stack);

// let stack2 = new Stack();

// console.log('STACK2: ', stack2.value);

// let queue = new Queue();

// queue.enqueue(5);
// queue.enqueue(10);
// console.log('QUEUE:', queue);
// console.log('QUEUE peek:', queue.peek());
// queue.dequeue();
// console.log('QUEUE after dequeue:', queue);

// let queue2 = new Queue();
// console.log('QUEUE2 front.value:', queue2.front);
// console.log('QUEUE2 isEmpty:', queue2.isEmpty());

module.exports = { Stack, Queue };
