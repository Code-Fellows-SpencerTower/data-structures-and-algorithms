# Trees

Practice implementing trees

## Challenge

- Node
  - Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.

- Binary Tree
  - Create a Binary Tree class
  - Contains pre-order, in-order, post-order methods.

- Binary Search Tree
  - Create a Binary Search Tree class
    - This class should be a sub-class (or your languages equivalent) of the Binary Tree Class.
    - Contains Add and Contains methods.

## Approach & Efficiency

Big O:

## API

### Binary Tree Methods

- Define a method for each of the depth first traversals:
      - pre order
      - in order
      - post order which returns an array of the values, ordered appropriately.
  - Any exceptions or errors that come from your code should be semantic, capture-able errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

### Binary Search Tree

- Add
  - Arguments: value
  - Return: nothing
  - Adds a new node with that value in the correct location in the binary search tree.

- Contains
  - Argument: value
  - Returns: boolean indicating whether or not the value is in the tree at least once.

## Resources

- JavaScript Algorithms and Data Structures Masterclass by Colt Steele
