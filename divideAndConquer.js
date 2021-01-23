// this patter involves dividing a data set into smaller chunks and then repeating a process with a subset of data.
// this pattern can tremendously decrease time complexity

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value can not be found, return -1

// O (n) this is a linear search
const search = (array, number) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === number) {
      return i;
    }
  }
  return -1;
};

search([1, 2, 3, 4, 5], 4); // 3

// we can do the same but with binary search.. dividing our input until we find.. BS
// Log(n) time complexity

const search = (array, number) => {
  let min = 0;
  let max = array.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);
    let currentElement = array[middle];

    if (array[middle] < val) {
      min = middle + 1;
    } else if (array[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return -1;
};
