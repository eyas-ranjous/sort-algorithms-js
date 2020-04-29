const { expect } = require('chai');
const data = require('./fixtures/data.json');
const RadixSort = require('../src/radixSort');

describe('.sort()', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => new RadixSort('test').sort()).to.throw(Error)
      .and.to.have.property('message', 'Sort: invalid array');
  });

  it('should throw an error when order unknown', () => {
    expect(() => new RadixSort([3, 1, 2], 'test').sort())
      .to.throw(Error, 'radix sort: order is either "asc" or "desc"');
  });

  it('throw an error when trying to sort string list', () => {
    expect(() => new RadixSort(data.strings.t1.unsorted).sort())
      .to.throw(Error, 'radix sort: invalid numeric value: hi');
  });

  it('sorts a list of numbers in ascending order', () => {
    expect(new RadixSort(data.numbers.t1.unsorted).sort())
      .to.deep.equal(data.numbers.t1.sorted.asc);

    expect(new RadixSort(data.numbers.t2.unsorted).sort())
      .to.deep.equal(data.numbers.t2.sorted.asc);
  });

  it('sorts a list of numbers in descending order', () => {
    expect(new RadixSort(data.numbers.t1.unsorted, 'desc').sort())
      .to.deep.equal(data.numbers.t1.sorted.desc);

    expect(new RadixSort(data.numbers.t2.unsorted, 'desc').sort())
      .to.deep.equal(data.numbers.t2.sorted.desc);
  });
});
