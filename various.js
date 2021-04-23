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

function binarySearch(array, target) {
  return helper(array, target, 0, array.length - 1);
}

const helper = (array, target, start, end) => {
  if (start > end) return -1;
  const middle = Math.floor((start + end) / 2);
  const potentialTarget = array[middle];

  if (target === potentialTarget) {
    return middle;
  } else if (target < potentialTarget) {
    return helper(array, target, start, middle - 1);
  } else {
    return helper(array, target, middle + 1, end);
  }
};

//Given a binary tree, populate an array to represent its level-by-level traversal. You should populate the values of all nodes of each level from left to right in separate sub-arrays.

class TreeNode{
  constructor(val){
    this.val=val;
    this.left=null;
    this.right=null;
  }
}
//print all the levels of the tree in sub arraysin order
function traverse(root){
  let result =[];
  if(!root) return result;

  let queue = []
  queue.push(root)
  whilt(queue.length>0){
    const levelSize = queue.length
    let currentLevel = []
    for(let i=0; i<levelSize; i++) {
      let currentNode = queue.shift()
      currentLevel.push(currentNode.val)

      if(currentNode.left !==null){
        queue.push(currentNode.left)
      }
      if(currentNode.right !== null){
        queue.push(currentNode.right)
      }

      result.push(currentLevel)
    }
  }
}
//same but in reverse
function traverseReverse(root){
  let result = []
  if (!root) return result

  let queue = [root]
  while(queue.length> 0){
    let levelsize = queue.length
    let currentLevel = []

    for (let i=0; i<levelSize;i++){
      let currentNode= queue.shift();

      currentLevel.push(currentNode.val)

      if(currentNode.left!==null){
        currentLevel.push(currentNode.left)
      }
      if(currentNode.right!==null){
        currentLevel.push(currentNode.right)
      }
    }
    result.ushift(currentLevel)
  }
  return result
}

//traverse but in zigzag

function traverseZigzag (root) {
  let result = []
  if(!root)return result
  let queue =[root]
  let leftToRight = true

  while(queue.length>0){
    let levelSize = queue.length
    let currentLevel = []
    for(let i=0; i<levelSize; i++){
      let curentNode = queue.shift()

      if(leftToRight){
        currentLevel.push(currentNode.val)
      } else {
        currentLevel.unshift(currentNode.val)
      }

      if(currentNode.left !==null){
        currentLevel.push(currentNode.left)
      }
      if(currentNode.right !==null){
        currentLevel.push(currentNode.right)
      }
    }
    result.push(currentLevet)
    leftToRight = !leftToRight
  }
  return result
}


//find average of its leveles

function averageTree (root){
  let result = []
  if (!root) return result
  let queue = [root]
  while(queue.length> 0){
    let levelSize = queue.length
    let levelSum =0
    for(let i=0; i<levelSize; i++){
      let currentNode = queue.shift()
      levelSum += currentNode.val

      if(currentNode.left !==null){
        queue.push(currentNode.left)
      }
      if(currentNode.right!==null){
        queue.push(currentNode.right)
      }
    }
    result.push(levelSum/levelSiza)
  }
  return result
}


//find minimum depth

function findDepth (root) {
  if(!root) return 0

  let queue =[root]
  let minimumDepth =0
  while(queue.length>0){
    minimumDepth ++
    let levelSize= queue.length
    for(let i=0; i<levelSize; i++){
      let currentNode= queue.shift()

      if (currentNode.left ===null  && currentNode.right ===null){
        return minimumDepth
      }
      if(currentNode.left!==null){
        queue.push(currentNode.left)
      }
      if(currentNode.right!==null){
        queue.pushe(currentNode.right)
      }
    }
  }
}

//for maximum depth its the same but we traverse all the way to the end and return out of the loop


//DFS Given a binary tree and a number ‘S’, find if the tree has a path from root-to-leaf such that the sum of all the node values of that path equals ‘S’.

function hasPath(root, sum){
  if(!root) return false

  // if the current node is a leaf and its value is equal to the sum, we've found a path
  if (root.val===sum && root.left ===null && root.right===null){
    return true
  }
   // recursively call to traverse the left and right sub-tree
  // return true if any of the two recursive call return true
  return hasPath(root.left, sum-root.val) || hasPath(root.right, sum-root.val)
}


//Given a binary tree and a number ‘S’, find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.

function find_paths(root, sum) {
  allPaths = [];
  find_paths_recursive(root, sum, new Deque(), allPaths);
  return allPaths;
}


function find_paths_recursive(currentNode, sum, currentPath, allPaths) {
  if (currentNode === null) {
    return;
  }

  // add the current node to the path
  currentPath.push(currentNode.val);

  // if the current node is a leaf and its value is equal to sum, save the current path
  if (currentNode.val === sum && currentNode.left === null && currentNode.right === null) {
    allPaths.push(currentPath.toArray());
  } else {
    // traverse the left sub-tree
    find_paths_recursive(currentNode.left, sum - currentNode.val, currentPath, allPaths);
    // traverse the right sub-tree
    find_paths_recursive(currentNode.right, sum - currentNode.val, currentPath, allPaths);
  }
  // remove the current node from the path to backtrack,
  // we need to remove the current node while we are going up the recursive call stack.
  currentPath.pop();
}


var invertTree = function(root) {
    const helperFunc = (node) => {
        if (node !== null){
             // let temp = node.left
             // node.left= node.right
             // node.right = temp
             [node.left,node.right] = [node.right, node.left]
             helperFunc(node.left)
             helperFunc(node.right)
        }
    }
    helperFunc(root)
    return root
};
