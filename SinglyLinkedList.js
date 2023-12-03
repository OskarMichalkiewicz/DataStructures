class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  get(idx) {
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current;
  }
  set(idx, val) {
    let current = this.get(idx);
    if (current) {
      current.val = val;
      return true;
    }
    return false;
  }
  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);
    let prev = this.get(idx - 1);
    let newNode = new Node(val);
    let temp = prev.next;
    newNode.next = temp;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    if (idx < 0 || idx > this.length) return false;
    if (idx == this.length - 1) return this.pop();
    if (idx === 0) return this.shift();
    let node = this.get(idx - 1);
    let deletedNode = node.next;
    node.next = deletedNode.next;
    this.length--;
    return deletedNode;
  }
  pop() {
    if (!this.head) return undefined;
    const last = this.get(this.length - 2);
    const temp = last.next;
    this.tail = last;
    last.next = null;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
      this.head = null;
    }
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    const current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }
  unshift(val) {
    let current = this.head;
    this.head = new Node(val);
    if (!this.head) this.tail = this.head;
    else {
      this.head.next = current;
    }
    this.length++;
    return this.head;
  }
  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }
}

let list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.insert(1, 222);
list.insert(6, 888);
list.pop();
list.remove(1);
console.log(list.get(2), list);
console.log(list.reverse());
console.log(list.get(2));
