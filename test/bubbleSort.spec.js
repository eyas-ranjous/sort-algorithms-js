const { expect } = require('chai');
const data = require('./fixtures/data.json');
const bubbleSort = require('../lib/bubbleSort');

describe('.bubbleSort(list)', () => {
  it('should throw an error when list is not an array', () => {
    expect(() => bubbleSort('test')).to.throw(Error)
      .and.to.have.property('message', '"test" is not an array');
  });

  it('should sort a list of numbers or strings', () => {
    expect(bubbleSort(data.a1)).to.deep.equal(data.sortedA1);
    expect(bubbleSort(data.a2)).to.deep.equal(data.sortedA2);
    expect(bubbleSort(data.a3)).to.deep.equal(data.sortedA3);
  });
});
