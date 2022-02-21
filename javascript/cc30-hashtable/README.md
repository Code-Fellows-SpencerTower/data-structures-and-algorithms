# Hashtables

## Challenge Summary

Implement a Hashtable Class with the following methods:

- set
  - Arguments: key, value
  - Returns: nothing
  - This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  - Should a given key already exist, replace its value from the value argument given to this method.
- get
  - Arguments: key
  - Returns: Value associated with that key in the table
- contains
  - Arguments: key
  - Returns: Boolean, indicating if the key exists in the table already.
- keys
  - Returns: Collection of keys
- hash
  - Arguments: key
  - Returns: Index in the collection for that key

## Approach & Efficiency

- set
  - creates a new bucket for key/value pair if none exists
  - if key hash already exists, adds key/value pair to linked list in bucket
  - adds key to keyArr in Hashtable object
  - pushes key to key array
  - Big O: O(1)
- get
  - uses a while loop to iterate through the values held in the bucket. The values are pushed to an array and returned.
  - Big O: O(n)
- contains
  - checks if the key exists in keyArr, returns true or false.
  - Big O: O(1)
- keys
  - returns unique values from keyArr in Hashtable object
  - Big O: O(n)
- hash
  - converts given key into an integer by totalling the ASCII values of the key, multiplying them by a prime number, and then dividing the result by the number of buckets in the hashtable.
  - Big O: O(1)
