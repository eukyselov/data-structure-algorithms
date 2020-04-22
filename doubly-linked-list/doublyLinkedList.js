class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class SingleLinked {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;

    if (this.head) this.head.previous = newNode;
    else this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  addTail(value) {
    const newNode = new Node(value);
    newNode.previous = this.tail;

    if (this.tail) this.tail.next = newNode;
    this.head = newNode;

    this.tail = newNode;
    length++;
  }

  removeHead() {
    if (!this.head) return null;

    const value = this.head.value;
    this.head = this.head.next;
    this.length--;

    if (this.head) this.head.previous = null;
    else this.tail = null;

    return value;
  }

  removeTail() {
    if (!this.tail) return null;

    const value = this.tail.value;
    this.tail = this.tail.previous;

    if (this.tail) this.tail.next = null;
    else this.head = null;

    return value;
  }

  search(value) {
    let currentNode = this.head;
    while(currentNode) {
      if(currentNode.value === value) return currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  print() {
    let result = [];
    let current = this.head;

    while(current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const sl = new SingleLinked();

sl.addToHead(12);
sl.addToHead(11);
sl.addToHead(10);

console.log(sl.print());
