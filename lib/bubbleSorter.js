/**
 * sort-algorithms-js/BubbleSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class BubbleSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    super(list);
  }

  /* 
   * @public
   * bubbles smaller elements to the beginning for each element in the list
   * @return {array} the sorted list
   */
  sort() {
    for (let i = this.list.length - 1; i > 0; i--) {
      for (let j = 0; j < i; j++) {
        if (this.list[j] > this.list[i]) {
          this._swap(i, j);
        }
      }
    }
    return this.list;
  }

}

module.exports = BubbleSorter;