function findThreeLargestNumbers(array) {
  let result = [null, null, null];
  for (const num of array) {
    updateLargest(result, num);
  }
  return result;
}

function updateLargest(result, num) {
  if (result[2] === null || num > result[2]) {
    shiftUpdate(result, num, 2);
  } else if (result[1] === null || num > result[1]) {
    shiftUpdate(result, num, 1);
  } else if (result[0] === null || num > result[0]) {
    shiftUpdate(result, num, 0);
  }
}

function shiftUpdate(array, num, index) {
  for (let i = 0; i <= index; i++) {
    if (i === index) {
      array[i] = num;
    } else {
      array[i] = array[i + 1];
    }
  }
}

console.log(findThreeLargestNumbers([10, 5, 9, 10, 12])); // [10,10,12]
