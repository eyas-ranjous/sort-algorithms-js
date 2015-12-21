describe('sort alorithms test', function() {

    'use strict';

    var expect = require('chai').expect,
        bubbleSort = require('../lib/bubbleSort.js'),
        selectionSort = require('../lib/selectionSort.js'),
        insertionSort = require('../lib/insertionSort.js'),
        heapSort = require('../lib/heapSort.js'),
        mergeSort = require('../lib/mergeSort.js'),
        quickSort = require('../lib/quickSort.js'),
        a1 = [0, 5, 2, -5, 1],
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

    it('bubble sort test', function() {
        expect(bubbleSort(c1)).to.be.eql(sortedA1);
        expect(bubbleSort(c2)).to.be.eql(sortedA2);
        expect(bubbleSort(c3)).to.be.eql(sortedA3);
    });

    it('selection sort test', function() {
        expect(selectionSort(c1)).to.be.eql(sortedA1);
        expect(selectionSort(c2)).to.be.eql(sortedA2);
        expect(selectionSort(c3)).to.be.eql(sortedA3);
    });

    it('insertion sort test', function() {
        expect(insertionSort(c1)).to.be.eql(sortedA1);
        expect(insertionSort(c2)).to.be.eql(sortedA2);
        expect(insertionSort(c3)).to.be.eql(sortedA3);
    });

    it('heap sort test', function() {
        heapSort(c1);
        expect(heapSort(c1)).to.be.eql(sortedA1);
        expect(heapSort(c2)).to.be.eql(sortedA2);
        expect(heapSort(c3)).to.be.eql(sortedA3);
    });

    it('merge sort test', function() {
        expect(mergeSort(c1)).to.be.eql(sortedA1);
        expect(mergeSort(c2)).to.be.eql(sortedA2);
        expect(mergeSort(c3)).to.be.eql(sortedA3);
    });

    it('quick sort test', function() {
        expect(quickSort(c1)).to.be.eql(sortedA1);
        expect(quickSort(c2)).to.be.eql(sortedA2);
        expect(quickSort(c3)).to.be.eql(sortedA3);
    });

});