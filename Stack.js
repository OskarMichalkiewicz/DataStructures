class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.size === 1) this.last = null;
    this.first = temp.next;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();

stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.pop();

console.log(stack);
