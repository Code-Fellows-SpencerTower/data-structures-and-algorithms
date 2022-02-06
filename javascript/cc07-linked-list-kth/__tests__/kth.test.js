'use strict';

const LinkedList = require('../index.js');


describe('Testing LinkedList kth method', () => {

  it('Should throw an exception if k is greater than the length of the linked list', () => {
    let ll = new LinkedList();
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(() => ll.kth(6)).toThrow('Position provided is greater than the lenght of the list');
  });

  it('Should return the first node in the list if k and the length of the list are the same', () => {
    let ll = new LinkedList();
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(ll.kth(2)).toEqual(100);
  });

  it('Should throw an exception if k is not a positive integer', () => {
    let ll = new LinkedList();
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(() => ll.kth(-1)).toThrow('k must be a positive integer');
  });

  it('Should return the head value if k is 0 and the list length is 1', () => {
    let ll = new LinkedList();
    ll.insert(100);
    expect(ll.kth(0)).toEqual(100);
  });

  it('Should return the value of the node at that is k positions from the end of the list', () => {
    let ll = new LinkedList();
    ll.insert(300);
    ll.insert(200);
    ll.insert(100);
    expect(ll.kth(1)).toEqual(200);
    expect(ll.kth(0)).toEqual(300);
  });
});
