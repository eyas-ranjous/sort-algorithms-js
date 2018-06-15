const { expect } = require('chai');
const data = require('./fixtures/data.json');
const insertionSort = require('../lib/insertionSort');

describe('.insertionSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => insertionSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(insertionSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(insertionSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(insertionSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
