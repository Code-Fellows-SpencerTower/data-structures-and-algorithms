'use strict';

let HashTable = require('../index.js');


describe('Testing HashTable methods', () => {

  it('Should set a key/value pair in the data structure and retrieve a value based on the key', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    let value = table.get('Spencer');
    expect(value).toEqual(['Seattle']);
  });

  it('Should return null for a key that does not exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    expect(table.get('James')).toEqual(null);
  });

  it('Should return a list of all unique keys that exist in the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    table.set('Spencer', 'Vancouver');
    table.set('Jimmy', 'Seattle');
    expect(table.keys().length).toEqual(2);
  });

  it('Should handle a collision within the hashtable', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    table.set('Spencer', 'Vancouver');
    expect(table.get('Spencer')).toEqual(['Seattle', 'Vancouver']);
  });

  it('Should retrieve a value from a bucket within the hashtable that has a collision', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    table.set('Spencer', 'Vancouver');
    expect(table.get('Spencer')).toEqual(['Seattle', 'Vancouver']);
  });

  it('Should hash a key to an in-range value', () => {
    let table = new HashTable(1024);
    table.set('Spencer', 'Seattle');
    expect(table.hash('Spencer')).toBeGreaterThanOrEqual(1);
    expect(table.hash('Spencer')).toBeLessThan(1025);
  });
});
