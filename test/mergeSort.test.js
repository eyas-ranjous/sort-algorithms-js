const { expect } = require('chai');
const reload = require('require-reload')(require);
const { mergeSort } = require('../src/factory');

const data = reload('./fixtures/data.json');

describe('Merge Sort', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => mergeSort('test')).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(mergeSort(data.numbers.t1.unsorted))
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(mergeSort(data.numbers.t2.unsorted))
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(mergeSort(data.numbers.t1.unsorted, (a, b) => (b - a)))
      .to.deep.equal(data.numbers.t1.sorted.desc);

    expect(mergeSort(data.numbers.t2.unsorted, (a, b) => (b - a)))
      .to.deep.equal(data.numbers.t2.sorted.desc);
  });

  it('sorts a list of strings in ascending order', () => {
    expect(mergeSort(data.strings.t1.unsorted))
      .to.deep.equal(data.strings.t1.sorted.asc);
  });

  it('sorts a list of strings in descending order', () => {
    const compare = (a, b) => (a < b ? 1 : -1);
    expect(mergeSort(data.strings.t1.unsorted, compare))
      .to.deep.equal(data.strings.t1.sorted.desc);
  });
});
