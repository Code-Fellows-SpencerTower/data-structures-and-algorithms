# Stack Queue Animal Shelter

Practice implementing stacks and queues

## Challenge

Create a class called AnimalShelter which holds only dogs and cats.
The shelter operates using a first-in, first-out approach.

## Approach & Efficiency

1. Created Node class
2. Created AnimalShelter class
    - contains cat queue and a dog queue
    - enqueue adds cat to cat queue, dogs to dog queue
    - dequeue removes cats from cat queue and dogs from dog queue, depending on user preference
      - notifies user if there preferred animal is not available

Big O: 
- enqueue: O(1)
- dequeue: O(1)


## API

### Animal Shelter Methods

- enqueue
  - Arguments: animal
    - `animal` can be either a dog or a cat object.
- dequeue
  - Arguments: pref
    - `pref` can be either `"dog"` or `"cat"`
  - Return: either a dog or a cat, based on preference.
    - If `pref` is not `"dog"` or `"cat"` then return null.