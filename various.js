const productExceptSelf = (nums) => {
  let result = [];
  let leftProducts = [];
  let rightProducts = [];

  leftProducts[0] = 1;
  rightProducts[nums.length - 1] = 1;

  for (let i = 1; i < nums.length; i++) {
    leftProducts[i] = nums[i - 1] * leftProducts[i - 1];
  }

  for (let i = nums.length - 2; i >= 0; i--) {
    rightProducts[i] = nums[i + 1] * rightProducts[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProducts[i] * rightProducts[i];
  }
  return result;
};

const productExceptSelf2 = (nums) => {
  var output = [];
  var leftMult = 1;
  var rightMult = 1;
  for (var i = nums.length - 1; i >= 0; i--) {
    output[i] = rightMult;
    rightMult *= nums[i];
  }

  for (var j = 0; j < nums.length; j++) {
    output[j] *= leftMult;
    leftMult *= nums[j];
  }
  return output;
};

console.log(productExceptSelf([1, 2, 3, 4])); // => 24,12,8,16

const asteroidCollision = (array) => {
  let stack = [];
  let i = 0;

  while (i < array.length) {
    if (array[i] >= 0 || !stack.length || stack[stack.length - 1] < 0) {
      stack.push(array[i]);
      i++;
    } else if (array[i] + stack[stack.length - 1] === 0) {
      stack.pop();
      i++;
    } else if (array[i] + stack[stack.length - 1] < 0) {
      stack.pop();
    } else {
      i++;
    }
  }

  return stack;
};

console.log(asteroidCollision([5, 10, -5])); // 5,10
console.log(asteroidCollision([8, -8])); // []
console.log(asteroidCollision([-2, -1, 1, 2])); // -2,-1,1,2
console.log(asteroidCollision([5, 10, -15])); // -15

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
};

LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const tmp = this.map.get(key);
    this.map.delete(key);
    this.map.set(key, tmp);
    return tmp;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    this.map.delete(key);
  } else if (this.map.size === this.capacity) {
    this.map.delete(this.map.keys().next().value);
  }
  this.map.set(key, value);
};

let lru = new LRUCache(2);
console.log(lru);

lru.put(1, 1);
lru.put(2, 2);
console.log(lru);
lru.get(1);
console.log(lru, 'despues');
lru.put(3, 3);
console.log(lru, ' poniendo 3');
lru.get(2);
lru.put(4, 4);
console.log(lru, 'poinendo el 4 se va 1');

var LRUCache = function (capacity) {
  this.cache = new Map();
  this.capacity = capacity;
};

LRUCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    const y = this.cache.get(key);
    this.put(key, y);
    return y;
  }
  return -1;
};

LRUCache.prototype.put = function (key, value) {
  this.cache.delete(key);
  this.cache.set(key, value);
  if (this.cache.size > this.capacity) {
    const least = this.cache.keys().next().value;
    this.cache.delete(least);
  }
};

function dutch_flag_sort(arr) {
  // all elements < low are 0, and all elements > high are 2
  // all elements from >= low < i are 1
  let low = 0;
  let high = arr.length - 1;
  let i = 0;

  while (i <= high) {
    if (arr[i] === 0) {
      [arr[i], arr[low]] = [arr[low], arr[i]]; // swap
      // increment 'i' and 'low'
      i += 1;
      low += 1;
    } else if (arr[i] === 1) {
      i += 1;
    } else {
      // the case for arr[i] === 2
      [arr[i], arr[high]] = [arr[high], arr[i]]; // swap
      // decrement 'high' only, after the swap the number at index 'i' could be 0, 1, or 2
      high -= 1;
    }
  }
  return arr;
}

console.log(dutch_flag_sort([0, 1, 2, 0, 1, 2])); // [0,0,1,1,2,2]

const numIslands = (grid) => {
  if (!grid) return 0;
  let count = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        explore(grid, i, j);
      }
    }
  }
  return count;
};

const explore = (grid, i, j) => {
  if (
    i < 0 ||
    j < 0 ||
    i >= grid.length ||
    j >= grid[i].length ||
    grid[i][j] === '0'
  ) {
    return 0;
  }

  grid[i][j] = '0';

  explore(grid, i + 1, j);
  explore(grid, i - 1, j);
  explore(grid, i, j + 1);
  explore(grid, i, j - 1);

  return 1;
};
