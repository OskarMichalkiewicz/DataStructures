class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.head = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    let tail = this.tail;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      tail.prev = null;
    }
    this.length--;
    return tail;
  }
  shift() {
    if (!this.head) return undefined;
    let head = this.head;
    if (this.length === 1) {
      this.tail = null;
      this.head = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      head.next = null;
    }
    this.length--;
    return head;
  }
  get(idx) {
    if (idx < 0 || idx >= this.length) return null;
    let current;
    if (idx > this.length / 2) {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) {
        current = current.prev;
      }
    } else {
      current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
    }
    return current;
  }
  set(val, idx) {
    let node = this.get(idx);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }
  insert(val, idx) {
    if (idx < 0 || idx >= this.length) return false;
    if (idx === 0) this.unshift(val);
    if (idx === this.length) this.push(val);
    let newNode = new Node(val);
    let prev = this.get(idx - 1);
    newNode.next = prev.next;
    newNode.prev = prev;
    prev.next.prev = newNode;
    prev.next = newNode;
    this.length++;
    return true;
  }
  remove(idx) {
    let node = this.get(idx);
    if (idx === 0) return this.shift();
    else if (idx === this.length - 1) return this.pop();
    else {
      let prev = node.prev;
      prev.next = node.next;
      node.next.prev = prev;
      node.next = null;
      node.prev = null;
      this.length--;
      return node;
    }
  }
}

const list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.insert(19, 2);
list.insert(123, 4);
console.log(list.get(2), list.get(4));
console.log("-----------------------------------------------------");
console.log(list.remove(2), list.remove(3));
