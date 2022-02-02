# Stacks Queue Pseudo

Practice implementing stacks and queues

## Challenge

Create a new class called pseudo queue.
Do not use an existing Queue.
Instead, this PseudoQueue class will implement our standard queue interface (the two methods listed below)
Internally, utilize 2 Stack instances to create and manage the queue

## Approach & Efficiency

I began with building the Node class. I then created the Stack class and built it's the methods, using the Node class to instantiate new nodes on the stack. Following that I created the Queue class, built out its methods, while using the Node class to instantiate new nodes for the queue. Once both where complete, I did some console log testing and then wrote the testing suite.

Big O:


## API

### Pseudo Queue Methods

- enqueue
  - Arguments: value
  - Inserts value into the PseudoQueue, using a first-in, first-out approach.
- dequeue
  - Arguments: none
  - Extracts a value from the PseudoQueue, using a first-in, first-out approach.

### Stack Methods

- push
  - Arguments: value
  - adds a new node with that value to the top of the stack with an O(1) Time performance.
- pop
  - Arguments: none
  - Returns: the value from node from the top of the stack
  - Removes the node from the top of the stack
  - Should raise exception when called on empty stack
- peek
  - Arguments: none
  - Returns: Value of the node located at the top of the stack
  - Should raise exception when called on empty stack