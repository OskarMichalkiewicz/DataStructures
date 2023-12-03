class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
  }
}

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
  swap(i, j) {
    [this.values[i], this.values[j]] = [this.values[j], this.values[i]];
  }
  insert(val) {
    this.values.push(val);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      if (this.values[index] <= this.values[parentIndex]) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
    return this;
  }
  extractMax() {
    if (!this.values.length) return undefined;
    if (this.values.length === 1) return this.values.pop();
    this.swap(0, this.values.length - 1);
    let removed = this.values.pop();
    let parentIdx = 0;
    while (true) {
      let parent = this.values[parentIdx];
      let leftChildIdx = 2 * parentIdx + 1;
      let rightChildIdx = 2 * parentIdx + 2;
      let leftChild = this.values[leftChildIdx] || 0;
      let rightChild = this.values[rightChildIdx] || 0;
      let biggerIdx = leftChild > rightChild ? leftChildIdx : rightChildIdx;
      let biggerChild = this.values[biggerIdx];

      if (biggerChild > parent) {
        this.swap(parentIdx, biggerIdx);
        parentIdx = biggerIdx;
      } else break;
    }
    return removed;
  }
  bubbleUp() {}
  find(val) {}
}
let heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
// heap.extractMax();
console.log(heap);
