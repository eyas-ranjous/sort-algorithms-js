'use strict';

class SorterFactory {

    create(algorithm, list) {
        let Sorter = require(`./${algorithm}Sorter`);
        return new Sorter(list);
    }

}

module.exports = new SorterFactory();