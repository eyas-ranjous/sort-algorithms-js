const { expect } = require('chai');
const data = require('./fixtures/data.json');
const quickSort = require('../lib/quickSort');

describe('.quickSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => quickSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(quickSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(quickSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(quickSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
