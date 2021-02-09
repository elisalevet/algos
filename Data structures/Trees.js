/*
Tree terminology
root =>top node in a tree
child => a node directly connected to another node when moving away from the root
parent => the converse notion of a child
siblings => a group of nodes with the same parent
leat => a node with no children
edge => the connection between one node and another (the line, the arrow conecting nodes)

they are used a lot.. in the HTML DOM, network routing, abstract syntax tree, artificial intelligence, folders in computer, json objects

types
- trees
- binary trees => each node can have a most 2 children
- binary search tree => each node can have most 2 children and they are sorted or contain data that is sortable...
every node to the left of a parent node is always less than the parent
every node to the right of a parent node is always greater than the parent
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  //just to check if it contains it and returning true or false if the case
  contains(value) {
    if (!this.root) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

// with these 2 methods we implemented we have insertion and searching of o(log n) it is a very sold complexity time.. it wrogs very slowly which is what we want
//
