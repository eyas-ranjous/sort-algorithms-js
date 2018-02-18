/*!
 * sort-algorithms-js
 * Sorter
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

class Sorter {

  /* 
   * @public
   * @param {array} list
   */
  constructor(list) {
    this.list = list;
  }

  /* 
   * @protected
   * swaps element at index i with element at index j
   * @param {number} i
   * @param {number} j
   */
  swap(i, j) {
    let temp = this.list[i];
    this.list[i] = this.list[j];
    this.list[j] = temp;
  }

}

module.exports = Sorter;