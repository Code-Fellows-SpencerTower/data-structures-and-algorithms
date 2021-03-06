# Singly Linked List Insertions

Practice implementing linked lists.

## Challenge

Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.


## Approach & Efficiency

Node class instantiates a new node.
LinkedList class instantiates a new linked list using the Node class and contains methods to modify and retreive data about the linked list.

BigO: insert method: O(1)


## API

- insert
  - Arguments: value
  - Returns: nothing
  - Adds a new node with that value to the head of the list with an O(1) Time performance.

- includes
  - Arguments: value
  - Returns: Boolean
  - Indicates whether that value exists as a Node’s value somewhere within the list.

- to string
  - Arguments: none
  - Returns: a string representing all the values in the Linked List, formatted as: "{ a } -> { b } -> { c } -> NULL"

- append
  - arguments: new value
  - adds a new node with the given value to the end of the list

- insert before
  - arguments: value, new value
  - adds a new node with the given new value immediately before the first node that has the value specified

- insert after
  - arguments: value, new value
  - adds a new node with the given new value immediately after the first node that has the value specified