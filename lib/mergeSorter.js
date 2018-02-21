/**
 * sort-algorithms-js/MergeSorter
 * @class
 * @extends Sorter
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

const Sorter = require('./sorter');

class MergeSorter extends Sorter {

  /* 
   * @constructor
   * @param {array} list
   */
  constructor(list) {
    super(list);
    this.startIndex = 0;
    this.endIndex = this.list.length - 1;
  }

  /* 
   * @private
   * merges two sorted partitions into one sorted partition
   * @param {array} leftPartition
   * @param {array} rightPartition
   * @return {array} the merged and sorted partition
   */
  mergePartitions(left, right) {
    let leftIndex = 0;
    let rightIndex = 0;
    let index = 0;
    let merged = [];

    while (leftIndex < left.length || rightIndex < right.length) {
      if (leftIndex === left.length) {
        for (index = rightIndex; index < right.length; index++) {
          merged.push(right[rightIndex]);
          rightIndex++;
        }
      }
      else if (rightIndex === right.length) {
        for (index = leftIndex; index < left.length; index++) {
          merged.push(left[leftIndex]);
          leftIndex++;
        }
      }
      else if (left[leftIndex] < right[rightIndex]) {
        merged.push(left[leftIndex]);
        leftIndex++;
      }
      else {
        merged.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return merged;
  }

  /* 
   * @public 
   * partition the list logically and recursively
   * then sort and merge the resulting partitions
   * @param {number} startIndex -  the logical devision startIndex index
   * @param {number} endIndex - the logical devision endIndex index
   * @return {array} the sorted list
   */
  sort(startIndex = this.startIndex, endIndex = this.endIndex) {
    let middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    if (endIndex - startIndex > 0) {
      let leftPartition = this.sort(startIndex, middleIndex);
      let rightPartition = this.sort(middleIndex + 1, endIndex);
      return this.mergePartitions(leftPartition, rightPartition);
    }
    else if (startIndex === endIndex) {
      return [this.list[startIndex]];
    }
  }

}

module.exports = MergeSorter;