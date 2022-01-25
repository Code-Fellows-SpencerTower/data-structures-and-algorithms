'use strict';

const { Stack, Queue } = require('../index.js');

// Stack Tests

describe('Testing Stack methods', () => {

  it('Should push onto a stack', () => {
    let stack = new Stack();
    stack.push(10);
    expect(stack.top.value).toEqual(10);
  });

  it('Should push multiple values onto a stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.top.value).toEqual(10);
    expect(stack.length()).toEqual(2);

  });

  it('Should pop the top node off the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.pop()).toEqual(10);
  });

  it('Should empty a stack after multiple pops', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.pop()).toEqual(10);
    expect(stack.pop()).toEqual(5);
    expect(stack.length()).toEqual(0);
    expect(stack.value).toEqual(undefined);
  });

  it('Shoud peek at the top item of the stack', () => {
    let stack = new Stack();
    stack.push(5);
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });

  it('Should be able to instantiate an empty stack', () => {
    let stack = new Stack();
    expect(stack.length()).toEqual(0);
    expect(stack.value).toEqual(undefined);
  });

  it('Should raise an exeption when pop or peek are called on an empty stack', () => {
    let stack = new Stack();
    expect(stack.pop()).toThrow('Stack is empty');
    expect(stack.peek()).toThrow('Stack is empty');
  });
});

// Queue Tests

describe('Testing queue methods', () => {

  it('Should enqueue into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    expect(queue.front.value).toEqual(5);
    expect(queue.back.value).toEqual(5);

  });

  it('Should enqueue multiple values into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    expect(queue.front.value).toEqual(5);
    expect(queue.back.value).toEqual(10);
  });

  it('Should dequeue out of a queue the expected value', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.dequeue();
    expect(queue.front.value).toEqual(10);
    expect(queue.back.value).toEqual(10);
  });

  it('Should be able to peek into a queue', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    expect(queue.peek()).toEqual(5);
  });

  it('Should empty the queue after multiple dequeues', () => {
    let queue = new Queue();
    queue.enqueue(5);
    queue.enqueue(10);
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toEqual(null);
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Should be able to instantiate an empty queue', () => {
    let queue = new Queue();
    expect(queue.front).toEqual(null);
    expect(queue.back).toEqual(null);
    expect(queue.isEmpty()).toEqual(true);
  });

  it('Should raise and exeption if dequeue or peek are called on an empty queue', () => {
    let queue = new Queue();
    expect(queue.dequeue()).toThrow('Queue is already empty');
    expect(queue.peek()).toThrow('Queue is already empty');
    expect(queue.isEmpty()).toEqual(true);
  });

});
