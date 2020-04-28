const { expect } = require('chai');
const data = require('./fixtures/data.json');
const HeapSort = require('../src/heapSort');

describe('.sort()', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => new HeapSort('test').sort()).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(new HeapSort(data.numbers.t1.unsorted).sort())
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(new HeapSort(data.numbers.t2.unsorted).sort())
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(new HeapSort(data.numbers.t1.unsorted, (a, b) => (b - a)).sort())
      .to.deep.equal(data.numbers.t1.sorted.desc);

    expect(new HeapSort(data.numbers.t2.unsorted, (a, b) => (b - a)).sort())
      .to.deep.equal(data.numbers.t2.sorted.desc);
  });

  it('sorts a list of strings in ascending order', () => {
    expect(new HeapSort(data.strings.t1.unsorted).sort())
      .to.deep.equal(data.strings.t1.sorted.asc);
  });

  it('sorts a list of strings in descending order', () => {
    const compare = (a, b) => (a < b ? 1 : -1);
    expect(new HeapSort(data.strings.t1.unsorted, compare).sort())
      .to.deep.equal(data.strings.t1.sorted.desc);
  });
});