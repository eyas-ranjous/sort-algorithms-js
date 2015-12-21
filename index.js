/*!
 * sort-algorithms-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = (function() {

    var self = {};

    function getAlgorithm(algorithm) {
        return require('./lib/' + algorithm);
    }

    self.bubbleSort = getAlgorithm('bubbleSort');
    self.insertionSort = getAlgorithm('insertionSort');
    self.selectionSort = getAlgorithm('selectionSort');
    self.heapSort = getAlgorithm('heapSort');
    self.quickSort = getAlgorithm('quickSort');
    self.mergeSort = getAlgorithm('mergeSort');

    return self;

})();