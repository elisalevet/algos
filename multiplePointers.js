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

//Average pair sum
// it is a function that given a sorted array and a target num, dtermine if there is a pair of values in that array where the average of the pair equals the target average. there can be more than one pair that matches the average target
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false

//Move Zeroes
// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

var moveZeroes = function (nums) {
  let startIdx = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[startIdx];
      nums[startIdx] = nums[i];
      nums[i] = temp;

      startIdx++;
    }
  }
  return nums;
};
