const { expect } = require('chai');
const data = require('./fixtures/data.json');
const radixSort = require('../lib/radixSort');

describe('.radixSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => radixSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(radixSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(radixSort(data.a2)).to.deep.equal(data.sortedA2);
  });

  it('should throw an error when trying to sort string list', () => {
    expect(() => radixSort(['hello', 'world'])).to.throw(Error)
      .and.to.have.property(
        'message',
        'cannot radix sort non-numeric value: hello'
      );
  });
});
