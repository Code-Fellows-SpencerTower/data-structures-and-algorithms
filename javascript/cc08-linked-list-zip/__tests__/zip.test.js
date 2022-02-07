'use strict';

const { LinkedList, zipLinkedLists } = require('../index');

describe('Testing zipLinkedLists functionality', () => {

  it('Should return two linked lists zipped together', () => {
    let ll = new LinkedList();
    ll.append(100);
    ll.append(300);
    let ll2 = new LinkedList();
    ll2.append(200);
    ll2.append(400);
    let zippedList = zipLinkedLists(ll, ll2);
    expect(zippedList.head.value).toEqual(100);
    expect(zippedList.head.next.value).toEqual(200);
    expect(zippedList.head.next.next.value).toEqual(300);
    expect(zippedList.head.next.next.next.value).toEqual(400);
  });
});
