class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    const helper = (val, node = this.root) => {
      if (val > node.val) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        return helper(val, node.right);
      } else {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        return helper(val, node.left);
      }
    };
    return helper(val);
  }
  find(val) {
    if (!this.root) {
      return false;
    }
    const helper = (val, node = this.root) => {
      if (val > node.val) {
        if (!node.right) {
          return node.val === val ? node : false;
        }
        return helper(val, node.right);
      } else {
        if (!node.left) {
          return node.val === val ? node : false;
        }
        return helper(val, node.left);
      }
    };
    return helper(val);
  }
  BFS() {
    let queue = [];
    let result = [];
    queue.push(this.root);
    while (queue.length) {
      let shifted = queue.shift();
      result.push(shifted.val);
      if (shifted.left) queue.push(shifted.left);
      if (shifted.right) queue.push(shifted.right);
    }
    return result;
  }
  DFS(current = this.root, nodes = []) {
    nodes.push(current.val);
    if (current.left) this.DFS(current.left, nodes);
    if (current.right) this.DFS(current.right, nodes);
    return nodes;
  }
  DFSPostOrder(current = this.root, nodes = []) {
    if (current.left) this.DFS(current.left, nodes);
    if (current.right) this.DFS(current.right, nodes);
    nodes.push(current.val);
    return nodes;
  }
  DFSInOrder(current = this.root, nodes = []) {
    if (current.left) this.DFS(current.left, nodes);
    nodes.push(current.val);
    if (current.right) this.DFS(current.right, nodes);
    return nodes;
  }
}

let Tree = new BinaryTree();

Tree.insert(10);
Tree.insert(3);
Tree.insert(20);
Tree.insert(14);
Tree.insert(16);
Tree.insert(32);
// console.log(Tree.find(3));
console.log(Tree.BFS());
console.log(Tree.DFS());
