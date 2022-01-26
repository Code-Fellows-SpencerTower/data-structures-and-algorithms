'use strict';


class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class AnimalShelter {
  constructor() {
    this.frontCat = null;
    this.backCat = null;
    this.frontDog = null;
    this.backDog = null;
  }

  // adds nodes to queue
  enqueue(animal) {
    if (!animal === 'dog' || !animal === 'cat') {
      return 'Only dogs or cats allowed';
    } else {
      let node = new Node(animal);
      // add to cat queue
      if (animal === 'cat') {
        if (this.frontCat === null) {
          this.frontCat = node;
          this.backCat = node;
          return;
        } else {
          let temp = this.backCat;
          this.backCat = node;
          temp.next = node;
          return;
        }
      } else {
        // add to dog queue
        if (this.frontDog === null) {
          this.frontDog = node;
          this.backDog = node;
          return;
        } else {
          let temp = this.backDog;
          this.backDog = node;
          temp.next = node;
          return;
        }
      }
    }
  }


  // remove nodes from queue - could convert to switch statement
  dequeue(pref) {
    if (pref === 'dog') {
      // check if dogs in shelter
      if (!this.frontDog) {
        this.backDog = null;
        return 'No dogs in the shelter :(';
      } else {
        // return dog at front of dog queue
        let nodeToRemove = this.frontDog;
        this.frontDog = nodeToRemove.next;
        nodeToRemove.next = null; // removes node
        return;
      }
    } else if (pref === 'cat') {
      // check if dogs in shelter
      if (!this.frontCat) {
        this.backCat = null;
        return 'No cats in the shelter :(';
      } else {
        // return dog at front of dog queue
        let nodeToRemove = this.frontCat;
        this.frontCat = nodeToRemove.next;
        nodeToRemove.next = null; // removes node
        return;
      }
    } else {
      return 'Shelter only has cats and dogs';
    }
  }
}

let shelter = new AnimalShelter();

shelter.enqueue('dog');
shelter.enqueue('cat');
shelter.enqueue('cat');
shelter.enqueue('dog');
shelter.enqueue('dog');
console.log(shelter);
shelter.dequeue('cat');
shelter.dequeue('dog');
console.log(shelter);



module.exports = AnimalShelter;
