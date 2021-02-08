class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let removed = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removed.previous;
      this.tail.next = null;
      removed.previous = null;
    }
    this.length--;
    return removed;
  }

  shift() {
    if (!this.head) return undefined;
    let removedHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedhead.next;
      this.head.previous = null;
      removedHead.next = null;
    }
    this.length--;
    return removedHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter;
    let current;
    if (index <= this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        curruent = current.previous;
        counter--;
      }
    }
    return current;
  }

  set(index, value) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    let newNode = new Node(value);
    let previousNode = this.get(index - 1);
    let afterNode = previousNode.next;
    previousNode.next = newNode;
    newNode.previous = previousNode;
    newNode.next = afterNode;
    afterNode.previous = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.lenght) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    let removedNode = this.get(index);
    let beforeNode = removedNode.previous;
    let afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.previous = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.previous = removedNode.previous;
    removedNode.next = null;
    removedNode.previous = null;
    this.length--;
    return deletedNode;
  }
}

// insertion o(1) linear
// removal o(1) linear
// searching o(n) constant => technically is o(n/2)
// acces o(n) constant
//easier to navigate but comes with the cost of more memory because of the new pointer (previous) we are creating
