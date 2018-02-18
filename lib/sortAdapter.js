/*!
 * sort-algorithms-js
 * SortAdapter
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
 */

const SorterFactory = require('./sorterFactory');

class SortAdapter {

  /* 
   * @public
   */
  constructor() {
    this.sorterFactory = new SorterFactory();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  bubbleSort(list) {
    return this.sorterFactory.create('bubble', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  insertionSort(list) {
    return this.sorterFactory.create('insertion', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  selectionSort(list) {
    return this.sorterFactory.create('selection', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  heapSort(list) {
    return this.sorterFactory.create('heap', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  quickSort(list) {
    return this.sorterFactory.create('quick', list).sort();
  }

  /* 
   * @public
   * @param {array} list
   * @returns {array} sorted list
   */
  mergeSort(list) {
    return this.sorterFactory.create('merge', list).sort();
  } 
}

module.exports = new SortAdapter();