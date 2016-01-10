/*!
 * sort-algorithms-js
 * index (main module object)
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = (function() {

    var self = {},
        src = './lib/';

    self.bubbleSort = require(src + 'bubbleSort');
    self.insertionSort = require(src + 'insertionSort');
    self.selectionSort = require(src + 'selectionSort');
    self.heapSort = require(src + 'heapSort');
    self.quickSort = require(src + 'quickSort');
    self.mergeSort = require(src + 'mergeSort');

    return self;

}());