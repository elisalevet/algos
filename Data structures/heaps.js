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
    this.values.push = value;
    this.bubbleUp();
  }

  bubbleUp() {
    let indexOfInserted = this.values.length - 1;
    let element = this.values[indexOfInserted];
    let parent = Math.floor((indexOfInserted - 1) / 2);

    while (indexOfInserted < parent) {
      let temp = indexOfInserted;
      indexOfInserted = parent;
      parent = temp;
    }
  }
}
