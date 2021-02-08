//data colectionn... abstarct
// LIFO last in ... first off... managing function invocations. undo/redo... history object routing is treated like a stack...
let stack = [];
//using push and pop
// dount use shift and unshift because you have to move all the indexes up so it takes more time and memory space
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null; // head
    this.last = null; // tail
    this.size = 0; // length
  }

  push(value) {
    // adding to the front of the stack in o(n)
    let newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;

    let temp = this.first;
    if (this.first === this.last) {
      // when only one node in the stack
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}
