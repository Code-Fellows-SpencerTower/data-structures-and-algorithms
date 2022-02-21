'use strict';

let LinkedList = require('./linkedlist.js');


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
    this.keyArr = [];

  }

  hash(key) {
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
      return state + char.charCodeAt(0);
    }, 0);
    let initialHash = sum * 599;
    let hash = initialHash % 1024;
    return hash;
  }

  set(key, value) {
    this.keyArr.push(key);
    let position = this.hash(key);
    let payload = `${key}:${value}`;
    // check if a bucket is there
    if (this.buckets[position]) {
      // add value to bucket
      let bucket = this.buckets[position];
      bucket.add(payload);
    } else {
      // create new bucket, add value, set bucket at position
      let bucket = new LinkedList();
      // add both key and value
      bucket.add(payload);
      this.buckets[position] = bucket;
    }
  }

  get(key) {
    let position = this.hash(key);
    // check if hash/bucket exists
    if (this.buckets[position]) {
      let bucket = this.buckets[position];
      let currentNode = bucket.head;
      let valueArr = [];
      while (currentNode) {
        let [keyFromList, value] = currentNode.value.split(':');
        if (keyFromList === key) {
          valueArr.push(value);
        }
        currentNode = currentNode.next;
      }
      return valueArr;
    } else {
      return null;
    }
  }

  contains(key) {
    if (key in this.keyArr) {
      return true;
    } else {
      return false;
    }
  }

  keys() {
    let uniqueKeys = [];
    if (this.keyArr.length === 0) {
      return null;
    } else {
      for (let i = 0; i < this.keyArr.length; i += 1) {
        if (!(uniqueKeys.includes(this.keyArr[i]))) {
          uniqueKeys.push(this.keyArr[i]);
        }
      }
      return uniqueKeys;
    }
  }
}

module.exports = HashTable;

