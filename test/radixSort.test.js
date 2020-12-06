const { expect } = require('chai');
const reload = require('require-reload')(require);
const { radixSort } = require('../src/factory');

const data = reload('./fixtures/data.json');

describe('Radix Sort', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => radixSort('test')).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('should throw an error when order unknown', () => {
    expect(() => radixSort([3, 1, 2], 'test'))
      .to.throw(Error, 'radix sort: order is either "asc" or "desc"');
  });

  it('throw an error when trying to sort string list', () => {
    expect(() => radixSort(data.strings.t1.unsorted))
      .to.throw(Error, 'radix sort: invalid numeric value: hi');
  });

  it('throw an error if getNumber callback is invalid', () => {
    expect(() => radixSort(data.strings.t1.unsorted, 'asc', 'test'))
      .to.throw(Error, 'radix sort: invalid getNumber callback');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(radixSort(data.numbers.t1.unsorted))
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(radixSort(data.numbers.t2.unsorted))
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(radixSort(data.numbers.t1.unsorted, 'desc'))
      .to.deep.equal(data.numbers.t1.sorted.desc);

    expect(radixSort(data.numbers.t2.unsorted, 'desc'))
      .to.deep.equal(data.numbers.t2.sorted.desc);
  });
});
