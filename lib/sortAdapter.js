/**
 * sort-algorithms-js/SortAdapter
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const SorterFactory = require('./sorterFactory');

class SortAdapter {

  /* 
   * @constructor
   */
  constructor() {
    this._sorterFactory = new SorterFactory();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  bubbleSort(list) {
    return this._sorterFactory.create('bubble', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  insertionSort(list) {
    return this._sorterFactory.create('insertion', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  selectionSort(list) {
    return this._sorterFactory.create('selection', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  heapSort(list) {
    return this._sorterFactory.create('heap', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  quickSort(list) {
    return this._sorterFactory.create('quick', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  mergeSort(list) {
    return this._sorterFactory.create('merge', list).sort();
  } 
}

module.exports = new SortAdapter();