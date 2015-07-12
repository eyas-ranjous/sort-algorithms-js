/*!
 * sort-algorithms-js
 * getMiddle
 * Copyright(c) 2015 Eyas Ranjous <eyas@eyasranjous.info>
 * MIT Licensed
 */

function getMiddle(i, j) {
    return (i + Math.floor((j - i) / 2));
}

module.exports = getMiddle;