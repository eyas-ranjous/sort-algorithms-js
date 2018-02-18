'use strict';

const expect = require('chai').expect;
const sorter = require('../index');

describe('sort algorithms test', () => {

  let a1 = [0, 5, 2, -5, 1];

  let a2 = [0, 3, 2, -5, 1, 2, -20, 783, -1005, 31, 25, 9, 100, -25, 2, 81,
    -77, 398, -9, 1289, -102, 115, 84, -956, 142, 326, -489, 65, -84, 127, 30, 
    -28, 12, 10, -7, 2];

  let a3 = ['hi', 'b', 'yes', 'know', 'photo', 'last', 'cloud'];
  let sortedA1 = [-5, 0, 1, 2, 5];

  let sortedA2 = [-1005, -956, -489, -102, -84, -77, -28, -25, -20, -9, -7, -5,
    0, 1, 2, 2, 2, 2, 3, 9, 10, 12, 25, 30, 31, 65, 81, 84, 100, 115, 127,
    142, 326, 398, 783, 1289];

  let sortedA3 = ['b', 'cloud', 'hi', 'know', 'last', 'photo', 'yes'];
  let c1, c2, c3;

  beforeEach(() => {
    c1 = a1.slice(0);
    c2 = a2.slice(0);
    c3 = a3.slice(0);
  });

  describe('.bubbleSort(list)', () => {
    it('should sort a list using bubble sort', () => {
      expect(sorter.bubbleSort(c1)).to.be.eql(sortedA1);
      expect(sorter.bubbleSort(c2)).to.be.eql(sortedA2);
      expect(sorter.bubbleSort(c3)).to.be.eql(sortedA3);
    });
  });

  describe('.selectionSort(list)', () => {
    it('should sort a list using selection sort', () => {
      expect(sorter.selectionSort(c1)).to.be.eql(sortedA1);
      expect(sorter.selectionSort(c2)).to.be.eql(sortedA2);
      expect(sorter.selectionSort(c3)).to.be.eql(sortedA3);
    });
  });

  describe('.insertionSort(list)', () => {
    it('should sort a list using insertion sort', () => {
      expect(sorter.insertionSort(c1)).to.be.eql(sortedA1);
      expect(sorter.insertionSort(c2)).to.be.eql(sortedA2);
      expect(sorter.insertionSort(c3)).to.be.eql(sortedA3);
    });
  });

  describe('.heapSort(list)', () => {
    it('should sort a list using heap sort', () => {
      expect(sorter.heapSort(c1)).to.be.eql(sortedA1);
      expect(sorter.heapSort(c2)).to.be.eql(sortedA2);
      expect(sorter.heapSort(c3)).to.be.eql(sortedA3);
    });
  });

  describe('.quickSort(list)', () => {
    it('should sort a list using quick sort', () => {
      expect(sorter.quickSort(c1)).to.deep.equal(sortedA1);
      expect(sorter.quickSort(c2)).to.deep.equal(sortedA2);
      expect(sorter.quickSort(c3)).to.deep.equal(sortedA3);
    });
  });

  describe('.mergeSort(list)', () => {
    it('should sort a list using merge sort', () => {
      expect(sorter.mergeSort(c1)).to.deep.equal(sortedA1);
      expect(sorter.mergeSort(c2)).to.deep.equal(sortedA2);
      expect(sorter.mergeSort(c3)).to.deep.equal(sortedA3);
    });
  });

});