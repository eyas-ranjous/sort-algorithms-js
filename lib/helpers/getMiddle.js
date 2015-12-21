/*!
 * sort-algorithms-js
 * helpers/getMiddle
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

'use strict';

module.exports = function(i, j) {
    return (i + Math.floor((j - i) / 2));
};