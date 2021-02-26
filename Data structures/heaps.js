//Max Binary Heap
/* Parents node will be greater than child.. ALWAYS
unordered
to find a child.. LEFT take the parent index TIMES 2 +1 => 2n +1
RIGHT take the parent index TIMES 2 + 2 = 2n +2
To find the parent of any children ... (n-1) /2
*/

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let indexOfInserted = this.values.length - 1;
    const element = this.values[indexOfInserted];
    while (indexOfInserted > 0) {
      let parentIdx = Math.floor((indexOfInserted - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[indexOfInserted] = parent;
      indexOfInserted = parentIdx;
    }
  }

  extractMax() {
    let max = this.values[0];
    let element = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = element;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    let lenght = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < lenght) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftchild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
//Priority Queue
/* elements with higher priorities are served before elements with lower priorities, it is an abstract concept... // lower number higher priority

 */

//implementing a priority queue with a max binary heap... to make a min binary heap we just compare the other way around

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  bubbleUp() {
    let indexOfInserted = this.values.length - 1;
    const element = this.values[indexOfInserted];
    while (indexOfInserted > 0) {
      let parentIdx = Math.floor((indexOfInserted - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[indexOfInserted] = parent;
      indexOfInserted = parentIdx;
    }
  }

  dequeue() {
    let max = this.values[0];
    let element = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = element;
      this.bubbleDown();
    }
    return max;
  }

  bubbleDown() {
    let index = 0;
    let lenght = this.values.length;
    let element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * index + 1;
      let rightChildIdx = 2 * index + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }
      if (rightChildIdx < lenght) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftchild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}
class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}
