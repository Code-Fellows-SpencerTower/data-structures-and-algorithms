'use strict';

let LinkedList = require('./linkedlist.js');


class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size);
  }

  hash(key) {
    let chars = key.split('');
    let sum = chars.reduce((state, char) => {
      return state + char.charCodeAt(0);
    }, 0);
    let initialHash = sum * 599;
    let hash = initialHash % this.size;
    return hash;
  }

  set(key, value) {
    let position = this.hash(key);
    let payload = `${key}:${value}`;
    // check if a bucket is there
    if (this.buckets[position]) {
      // add value to bucket
      let bucket = this.buckets[position];
      bucket.add(payload);
      // return repeat value
      return value;
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
}

function treeIntersection(tree1, tree2, hashtable) {

  let repeatValuesArr = [];
  function traverse(node) {
    // set both key and value equal to nodes value
    let key = node.value.toString();
    let value = node.value.toString();
    let repeatValue = hashtable.set(key, value);
    repeatValue ? repeatValuesArr.push(repeatValue) : null;
    if (node.left) {
      traverse(node.left);
    }
    if (node.right) {
      traverse(node.right);
    }
  }
  if (tree1.root && tree2.root) {
    // iterate through trees
    traverse(tree1.root);
    traverse(tree2.root);
    return repeatValuesArr;
  } else {
    return 'Error';
  }
}

module.exports = { HashTable, treeIntersection };
