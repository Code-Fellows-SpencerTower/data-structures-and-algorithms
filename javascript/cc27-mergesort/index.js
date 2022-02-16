'use strict';

function mergeSort(arr) {
  let arrlength = arr.length;

  if (arrlength > 1) {
    let mid = arrlength / 2;
    let left = arr[0, mid];
    let right = arr[mid, arrlength];

    mergeSort(left);
    mergeSort(right);
    merge(left, right, arr);
  }

}

function merge(left, right, arr) {
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[i]) {
      arr[k] = left[i];
      i += 1;
    } else {
      arr[k] = right[j];
      j += 1;
    }
    k += 1;
  }
  if (i === left.length) {

  }
}