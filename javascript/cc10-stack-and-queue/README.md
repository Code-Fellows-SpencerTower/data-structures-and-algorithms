# Stacks and Queues

Practice implementing stacks and queues

## Challenge

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

- Node
  - Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

- Stack
  - Create a Stack class that has a top property. It creates an empty Stack when instantiated. This object should be aware of a default empty value assigned to top when the stack is created.

- Queue
  - Create a Queue class that has a front property. It creates an empty Queue when instantiated. This object should be aware of a default empty value assigned to front when the queue is created.

## Approach & Efficiency

I began with building the Node class. I then created the Stack class and built it's the methods, using the Node class to instantiate new nodes on the stack. Following that I created the Queue class, built out its methods, while using the Node class to instantiate new nodes for the queue. Once both where complete, I did some console log testing and then wrote the testing suite.

Big O:
- Stack
  - push: O(1)
- Queue
  - enqueue: O(1)


## API

### Stack

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
- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the stack is empty.

### Queue

- enqueue
  - Arguments: value
  - adds a new node with that value to the back of the queue with an O(1) Time performance.
- dequeue
  - Arguments: none
  - Returns: the value from node from the front of the queue
  - Removes the node from the front of the queue
  - Should raise exception when called on empty queue
- peek
  - Arguments: none
  - Returns: Value of the node located at the front of the queue
  - Should raise exception when called on empty stack
- is empty
  - Arguments: none
  - Returns: Boolean indicating whether or not the queue is empty