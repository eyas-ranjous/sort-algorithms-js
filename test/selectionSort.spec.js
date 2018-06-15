const { expect } = require('chai');
const data = require('./fixtures/data.json');
const selectionSort = require('../lib/selectionSort');

describe('.selectionSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => selectionSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(selectionSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(selectionSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(selectionSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
