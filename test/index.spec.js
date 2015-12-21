describe('index (main module) test', function() {

    'use strict';

    var expect = require('chai').expect,
        ds = require('../index');

    it('should get a bubbleSort function', function() {
        expect(ds.bubbleSort).to.be.instanceof(Function);
    });

    it('should get a heapSort function', function() {
        expect(ds.heapSort).to.be.instanceof(Function);
    });

    it('should get a insertionSort function', function() {
        expect(ds.insertionSort).to.be.instanceof(Function);
    });

    it('should get a mergeSort function', function() {
        expect(ds.mergeSort).to.be.instanceof(Function);
    });

    it('should get a quickSort function', function() {
        expect(ds.quickSort).to.be.instanceof(Function);
    });

    it('should get a selectionSort function', function() {
        expect(ds.selectionSort).to.be.instanceof(Function);
    });

});