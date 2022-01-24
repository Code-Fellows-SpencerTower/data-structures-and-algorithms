'use strict';

// Require our linked list implementation
const LinkedList = require('../index.js');

describe('Testing the LinkedList constructor', () => {
  it('Should instantiate an empty linked list', () => {
    let ll = new LinkedList();
    expect(ll).toBeUndefined();
  });

  it('Should properly insert into the linked list', () => {
    let ll = new LinkedList();
    ll.insert(100);
    expect(ll.head.data).toEqual(100);

  });

  it('Should point to the first node on the linked list when the head property is called', () => {
    let ll = new LinkedList();
    ll.insert(100);
    expect(ll.head).toBeDefined();
  });

  it('Should properly insert multiple nodes into the linked list', () => {
    let ll = new LinkedList();
  })
}

//   it('Should create a new node with a given value passed into insert() method', () => {
//     let ll = LinkedList();
//     ll.insert('test');
//     // expect()
//   });
// });

// expect(true).toBeTruthy();