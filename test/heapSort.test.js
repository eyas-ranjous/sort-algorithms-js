const { expect } = require('chai');
const reload = require('require-reload')(require);
const { heapSort } = require('../lib/factory');

const data = reload('./fixtures/data.json');

describe('Heap Sort', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => heapSort('test')).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(heapSort(data.numbers.t1.unsorted))
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(heapSort(data.numbers.t2.unsorted))
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(heapSort(data.numbers.t1.unsorted, (a, b) => (b - a)))
      .to.deep.equal(data.numbers.t1.sorted.desc);

    expect(heapSort(data.numbers.t2.unsorted, (a, b) => (b - a)))
      .to.deep.equal(data.numbers.t2.sorted.desc);
  });

  it('sorts a list of strings in ascending order', () => {
    expect(heapSort(data.strings.t1.unsorted))
      .to.deep.equal(data.strings.t1.sorted.asc);
  });

  it('sorts a list of strings in descending order', () => {
    const compare = (a, b) => (a < b ? 1 : -1);
    expect(heapSort(data.strings.t1.unsorted, compare))
      .to.deep.equal(data.strings.t1.sorted.desc);
  });
});
