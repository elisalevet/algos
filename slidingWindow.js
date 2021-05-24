// this pattern involves creating a window which can be either be an array of number from one position to another.
// depending on a certain condition, the window either increases or closes (and a new window is created)
// useful for keeping track of a subset of data in an array/string

// Function which accepts an array of integers and a number called n. The funcion should calculate the maximum sum of n consecutive elements in the array

// NAIVE SOLUTION
// big o notation of o(n^2) because of the nested loop
const maxSubarraySum = (array, num) => {
  if (num > array.length) return null;

  let max = -Infinity; // just in case we are given an array of negative numbers

  for (let i = 0; i < array.length - num; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += array[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
};
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17

const maxSubarraySum = (array, num) => {
  let maxSum = 0;
  let tempSum = 0;

  if (array.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += array[i];
  }
  tempSum = maxSum;

  for (let i = num; i < array.length; i++) {
    tempSum = tempSum - array[i - num] + array[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2); // 10
maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4); // 17
// another sliding window

function find_averages_of_subarrays(K, arr) {
  const result = [];
  let windowSum = 0.0;
  let windowStart = 0;
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]; // add the next element
    console.log(windowSum, 'windowSum');
    // slide the window, we don't need to slide if we've not hit the required window size of 'k'

    if (windowEnd >= K - 1) {
      result.push(windowSum / K); // calculate the average
      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return result;
}

const result = find_averages_of_subarrays(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]);
console.log(`Averages of subarrays of size K: ${result}`);

const findAverage = (k, array) => {
  let result = [];

  for (let i = 0; i < array.length - k; i++) {
    let sum = 0.0;
    for (let j = i; j < i + k; j++) {
      sum += array[j];
    }
    result.push(sum / k);
  }

  return result;
};

console.log(findAverage(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));

const slidingWindow = (k, array) => {
  let result = [];
  let windowSum = 0.0;
  let i = 0;

  for (let j = 0; j < array.length; j++) {
    windowSum += array[j];

    if (j >= k - 1) {
      result.push(windowSum / k);
      windowSum -= array[i];
      i++;
    }
  }

  return result;
};

console.log(slidingWindow(5, [1, 3, 2, 6, -1, 4, 1, 8, 2]));
