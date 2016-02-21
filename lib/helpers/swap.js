/*!
 * sort-algorithms-js
 * helpers/swap
 * Copyright(c) 2015 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

'use strict';

module.exports = function(dataArray, i, j) {
    var temp = dataArray[i];
    dataArray[i] = dataArray[j];
    dataArray[j] = temp;
};