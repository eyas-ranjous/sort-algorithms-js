const { expect } = require('chai');
const data = require('./fixtures/data.json');
const InsertionSort = require('../src/insertionSort');

describe('.sort()', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => new InsertionSort('test').sort()).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(new InsertionSort(data.numbers.t1.unsorted).sort())
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(new InsertionSort(data.numbers.t2.unsorted).sort())
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(new InsertionSort(
      data.numbers.t1.unsorted,
      (a, b) => (b - a)
    ).sort()).to.deep.equal(data.numbers.t1.sorted.desc);

    expect(new InsertionSort(
      data.numbers.t2.unsorted,
      (a, b) => (b - a)
    ).sort()).to.deep.equal(data.numbers.t2.sorted.desc);
  });

  it('sorts a list of strings in ascending order', () => {
    expect(new InsertionSort(data.strings.t1.unsorted).sort())
      .to.deep.equal(data.strings.t1.sorted.asc);
  });

  it('sorts a list of strings in descending order', () => {
    const compare = (a, b) => (a > b ? -1 : 1);
    expect(new InsertionSort(data.strings.t1.unsorted, compare).sort())
      .to.deep.equal(data.strings.t1.sorted.desc);
  });
});
