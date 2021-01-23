// Multiple pointers algorithm

// function that accepts a sorted array of integers, it should fin the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist
const sumZero = (array) => {
  let leftIndex = 0;
  let rightIndex = array.length - 1;

  //while left is less than rigth so we dont get false positives
  while (leftIndex < rightIndex) {
    let sum = array[leftIndex] + array[rightIndex];

    if (sum === 0) {
      return [array[leftIndex], array[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
};
sumZero([-4, -3, -2, -1, 0, 5, 10]); //undefinied
sumZero([-3, -2, -1, 0, 1, 2, 3]); // [-3,3]

//Implement a function which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but will always be sorted
const countUniqueValues = (array) => {
  if (array.lenght === 0) return 0;
  let i = 0;

  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
};

countUniqueValues([1, 1, 1, 1, 1, 2]); // 2
countUniqueValues([1, 2, 3, 4, 4, 4, 4, 5, 6, 7, 8, 14]); //9
countUniqueValues([1, 2, 3, 4, 5, 5, 7, 7, 12, 13]); // 8)

//Write a function that accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
const areThereDuplicates = (...args) => {
  // Two pointers
  args.sort((a, b) => a > b);
  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

//oneliner
const areThereDuplicates = () => {
  return new Set(arguments).size !== arguments.length;
};
