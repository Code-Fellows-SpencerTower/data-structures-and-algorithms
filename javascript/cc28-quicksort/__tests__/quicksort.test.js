'use strict';

// quick sort tests
let quickSort = require('../index.js');

let array1 = [8, 4, 23, 42, 16, 15];
let array2 = [20, 18, 12, 8, 5, -2];
let array3 = [5, 12, 7, 5, 5, 7];
let array4 = [2, 3, 5, 7, 13, 11];

describe('Testing quickSort funciton', () => {

  it('Should sort a given array', () => {
    expect(quickSort(array1, 0, 5)).toEqual([4, 8, 15, 16, 23, 42]);
    expect(quickSort(array2, 0, 5)).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(quickSort(array3, 0, 5)).toEqual([5, 5, 5, 7, 7, 12]);
    expect(quickSort(array4, 0, 5)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
