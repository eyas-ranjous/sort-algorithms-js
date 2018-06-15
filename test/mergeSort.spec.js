const { expect } = require('chai');
const data = require('./fixtures/data.json');
const mergeSort = require('../lib/mergeSort');

describe('.mergeSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => mergeSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(mergeSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(mergeSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(mergeSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
