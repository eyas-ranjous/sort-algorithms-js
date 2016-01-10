var expect = require('chai').expect,
    sorter = require('../index');

describe('sort alorithms test', function() {

    'use strict';

    var a1 = [0, 5, 2, -5, 1],
        a2 = [0, 3, 2, -5, 1, 2, -20, 783, -1005, 31, 25, 9, 100, -25, 2, 81, -77, 398, -9, 1289, -102, 115, 84, -956, 142, 326, -489, 65, -84, 127, 30, -28, 12, 10, -7, 2],
        a3 = ['hi', 'b', 'yes', 'know', 'photo', 'last', 'cloud'],
        sortedA1 = [-5, 0, 1, 2, 5],
        sortedA2 = [-1005, -956, -489, -102, -84, -77, -28, -25, -20, -9, -7, -5, 0, 1, 2, 2, 2, 2, 3, 9, 10, 12, 25, 30, 31, 65, 81, 84, 100, 115, 127, 142, 326, 398, 783, 1289],
        sortedA3 = ['b', 'cloud', 'hi', 'know', 'last', 'photo', 'yes'],
        c1, c2, c3;

    beforeEach(function() {
        // clone the arrays
        c1 = a1.slice(0);
        c2 = a2.slice(0);
        c3 = a3.slice(0);
    });

    it('should get a bubbleSort function', function() {
        expect(sorter.bubbleSort).to.be.instanceof(Function);
    });

    it('should get a heapSort function', function() {
        expect(sorter.heapSort).to.be.instanceof(Function);
    });

    it('should get a insertionSort function', function() {
        expect(sorter.insertionSort).to.be.instanceof(Function);
    });

    it('should get a mergeSort function', function() {
        expect(sorter.mergeSort).to.be.instanceof(Function);
    });

    it('should get a quickSort function', function() {
        expect(sorter.quickSort).to.be.instanceof(Function);
    });

    it('should get a selectionSort function', function() {
        expect(sorter.selectionSort).to.be.instanceof(Function);
    });

    it('bubble sort test', function() {
        expect(sorter.bubbleSort(c1)).to.be.eql(sortedA1);
        expect(sorter.bubbleSort(c2)).to.be.eql(sortedA2);
        expect(sorter.bubbleSort(c3)).to.be.eql(sortedA3);
    });

    it('selection sort test', function() {
        expect(sorter.selectionSort(c1)).to.be.eql(sortedA1);
        expect(sorter.selectionSort(c2)).to.be.eql(sortedA2);
        expect(sorter.selectionSort(c3)).to.be.eql(sortedA3);
    });

    it('insertion sort test', function() {
        expect(sorter.insertionSort(c1)).to.be.eql(sortedA1);
        expect(sorter.insertionSort(c2)).to.be.eql(sortedA2);
        expect(sorter.insertionSort(c3)).to.be.eql(sortedA3);
    });

    it('heap sort test', function() {
        expect(sorter.heapSort(c1)).to.be.eql(sortedA1);
        expect(sorter.heapSort(c2)).to.be.eql(sortedA2);
        expect(sorter.heapSort(c3)).to.be.eql(sortedA3);
    });

    it('merge sort test', function() {
        expect(sorter.mergeSort(c1)).to.be.eql(sortedA1);
        expect(sorter.mergeSort(c2)).to.be.eql(sortedA2);
        expect(sorter.mergeSort(c3)).to.be.eql(sortedA3);
    });

    it('quick sort test', function() {
        expect(sorter.quickSort(c1)).to.be.eql(sortedA1);
        expect(sorter.quickSort(c2)).to.be.eql(sortedA2);
        expect(sorter.quickSort(c3)).to.be.eql(sortedA3);
    });

});