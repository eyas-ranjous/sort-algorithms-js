/*!
 * sort-algorithms-js
 * SorterFactory
 * Copyright(c) 2018 Eyas Ranjous <eyas.ranjous@gmail.com>
 * MIT Licensed
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