const swap = require('./swap');
const validate = require('./validate');

const bubbleSort = (list) => {
  validate(list);
  const sorted = list.slice(0);
  for (let i = sorted.length - 1; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (sorted[j] > sorted[i]) {
        swap(sorted, i, j);
      }
    }
  }
  return sorted;
};

module.exports = bubbleSort;
