/* eslint-disable require-jsdoc */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length ++;
    return this;
  }
  pop() {
    if (!this.head) return undefined;
    const currentNode = this.head;
    let previousNode = currentNode;
    while (currentNode.next) {
      previousNode = currentNode;
      currentNode = current.next;
    }
    this.tail = previousNode;
    this.tail.next = null;
    this.length --;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }
  shift() {
    if (!this.head) return undefined;
    const currentNode = this.head;
    this.head = currentNode.next;
    this.length --;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentNode;
  }
  unshift(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter ++;
    }
    return node;
  }
  set(index, value) {
    const node = this.get(index);
    if (node) {
      node.val = value;
      return true;
    }
    return false;
  }
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(value);
      return true;
    }
    if (index === 0) {
      this.unshift(value);
      return true;
    }
    const previousNode = this.get(index - 1);
    const newNode = new Node(value);
    const temp = previousNode.next;
    newNode.next = temp;
    previousNode.next = newNode;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) this.pop();
    if (index === 0) this.shift();
    const previousNode = this.get(index - 1);
    const nodeToRemove = previousNode.next;
    previousNode.next = nodeToRemove.next;
    this.length--;
    return nodeToRemove;
  }
  reverse() {
    const node = this.head;
    this.head = this.tail;
    this.tail = node;
    let previousNode = null;
    let nextNode = null;
    for (let i = 0; i < this.length; i++) {
      nextNode = node.next;
      node.next = previousNode;
      previousNode = node;
      node = nextNode;
    }
    return this;
  }
}

const list = new SinglyLinkedList();
list.push('Hello');
list.push('World');
