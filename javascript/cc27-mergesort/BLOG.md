# Merge Sort

## Pseudo Code

``` JS
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length

    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)

ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0

    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1

        k <-- k + 1

    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

## Sample Data

``` JS
[8,4,23,42,16,15]
```

- If the array has a length greater than 1, it is divided into two halves. The left and right sides are then sorted by being passed back into the MergeSort function. Both the left and right sides, along with the array are passed into the Merge() function. This continues recursively for each side until the length of the side passed back into MergeSort has a length of 1.
- The Merge() function recieves the left and right sides, and the array. The values of the left and right sides are compared. If the left value is less than or equal to the right value, the left value is set to the corresponding index in the array. Otherwise, if the right side's value is less than the left, the right side's value is assigned to the corresponding index of the array.
