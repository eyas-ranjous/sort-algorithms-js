/**
 * sort-algorithms-js/SorterFactory
 * @class
 * @copyright 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * @license MIT
 */

class SorterFactory {

  /* 
   * @public
   * creates a list sorter
   * @param {string} algorithm
   * @param {array} list
   * @returns {Sorter}
   */
  create(algorithm, list) {
    let Sorter = require(`./${algorithm}Sorter`);
    return new Sorter(list);
  }

}

module.exports = SorterFactory;