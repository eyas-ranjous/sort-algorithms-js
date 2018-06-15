const swap = require('./swap');
const validate = require('./validate');

const toHeap = (list) => {
  const heap = list.slice(0);
  const toHeapFn = (index) => {
    let i = index;
    const parentIndex = Math.floor((i - 1) / 2);
    if (parentIndex >= 0 && heap[i] > heap[parentIndex]) {
      swap(heap, i, parentIndex);
      toHeapFn(parentIndex);
    }

    i += 1;
    if (i < heap.length) {
      toHeapFn(i);
    }
    return heap;
  };
  return toHeapFn(0);
};

const getMaxChild = (heap, index, leftIndex, rightIndex) => {
  if (heap[rightIndex] > heap[leftIndex] && rightIndex < index) {
    return rightIndex;
  }
  return leftIndex;
};

const swapMaxWithParent = (heap, index, parent, leftIndex, rightIndex) => {
  if (leftIndex < index) {
    const maxIndex = getMaxChild(heap, index, leftIndex, rightIndex);
    if (heap[parent] < heap[maxIndex]) {
      swap(heap, parent, maxIndex);
    }
    const left = (maxIndex * 2) + 1;
    const right = (maxIndex * 2) + 2;
    swapMaxWithParent(heap, index, maxIndex, left, right);
  }
};

const heapSort = (list) => {
  validate(list);
  const heap = toHeap(list);
  for (let i = heap.length - 1; i > 0; i -= 1) {
    swap(heap, 0, i);
    swapMaxWithParent(heap, i, 0, 1, 2);
  }
  return heap;
};

module.exports = heapSort;
