const { expect } = require('chai');
const data = require('./fixtures/data.json');
const heapSort = require('../lib/heapSort');

describe('.heapSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => heapSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(heapSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(heapSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(heapSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
