// Frecuency counter algorithm
// Big O of O(n)
const anagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let counter = {};

  for (let i = 0; i < string1.length; i++) {
    let letter = string1[i];
    //if letter existe, increment, otherwise set to 1
    counter[letter] ? (counter[letter] += 1) : (counter[letter] = 1);
  }

  for (let i = 0; i < string2.length; i++) {
    let letter = string2[i];
    //cant find lettter or letter is zero then it is not anagram
    if (!counter[letter]) {
      return false;
    } else {
      counter[letter] -= 1;
    }
  }
  return true;
};

anagram('anagram', 'nagaram'); // true

// Big O of O(nlog(n)) // this solutions is very fast to get to ... also denmostrates simplicity .. might be able to do less lines of code
const anagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false;
  }

  let newString1 = string1.split('').sort().join('');
  let newString2 = string2.split('').sort().join('');

  if (newString1 === newString2) return true;
  return false;
};

// Big O of O(n)
// write a function that takes 2 arrays, the function should return true if every value in the array has its corresponding value squared in the second array. The frecuency of values must be the same
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let counter1 = {};
  let counter2 = {};

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1;
    console.log(counter1, 'checking steps');
  }
  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1;
  }

  console.log(counter1, 'counter1');
  console.log(counter2, 'counter2');

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) {
      return false;
    }
    if (counter2[key ** 2] !== counter1[key]) {
      return false;
    }
  }
  return true;
};

same([1, 2, 3], [1, 4, 9]); // true
same([1, 2, 3], [1, 9]); // false
same([1, 2, 1], [4, 4, 1]); // false (must be same frecuency)

// write a function called samefrequency. Given two positive integers, find out if the 2 numbers have the same frequency of digits.. Time o(n)
function sameFrequency(num1, num2) {
  let array1 = num1.toString();
  let array2 = num2.toString();

  if (array1.length !== array2.length) return false;

  let counter1 = {};
  let counter2 = {};

  for (let i = 0; i < array1.length; i++) {
    counter1[array1[i]] = (counter1[array1[i]] || 0) + 1;
  }
  console.log(counter1);
  for (let i = 0; i < array2.length; i++) {
    counter2[array2[i]] = (counter2[array2[i]] || 0) + 1;
  }
  console.log(counter2);

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) {
      return false;
    }
    return true;
  }
}

console.log(sameFrequency(182, 281)); //true
console.log(sameFrequency(34, 14)); //false

//Write a function that accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.
/// big o time o(n) space o(n)
const areThereDuplicates = () => {
  let counter = {};

  for (let val in arguments) {
    counter[arguments[val]] = (counter[arguments[val]] || 0) + 1;
  }
  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
};

console.log(areThereDuplicates('')); // false
console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates('a', 'b', 'c', 'a')); //true
