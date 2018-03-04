/**
 * sort-algorithms-js/Sorter
 * @class
 * @abstract
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    this._list = list;
  }

  /* 
   * @protected
   * swaps element at index i with element at index j
   * @param {number} i
   * @param {number} j
   */
  _swap(i, j) {
    let temp = this._list[i];
    this._list[i] = this._list[j];
    this._list[j] = temp;
  }

}

module.exports = Sorter;