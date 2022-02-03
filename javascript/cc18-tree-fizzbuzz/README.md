# Challenge Summary

- Write a function called fizz buzz tree
  - Arguments: k-ary tree
  - Return: new k-ary tree

- Determine whether or not the value of each node is divisible by 3, 5 or both.
- Create a new tree with the same structure as the original, but the values modified as follows:
  - If the value is divisible by 3, replace the value with “Fizz”
  - If the value is divisible by 5, replace the value with “Buzz”
  - If the value is divisible by 3 and 5, replace the value with “FizzBuzz”
  - If the value is not divisible by 3 or 5, simply turn the number into a String.

## Whiteboard Process

![tree-fizzbuzz-whiteboard](tree-fizzbuzz-whiteboard.png)

## Approach & Efficiency

I used recursion to traverse the tree, while checking to see if each value was divisible by 3, 5, both 3 and 5, or niether.

Big O: O(n)

## Solution

- treeFizzBuzz(tree)
  - the tree parameter is a K-ary binary tree
  - returns an array of breadth first values

## Resources

- Erik Savage
