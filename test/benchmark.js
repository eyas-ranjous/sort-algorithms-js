const Timer = require('timer-node');
const { program } = require('commander');

const sortAlgorithms = require('../index');

program
  .requiredOption('-s, --size <number>', 'sample size')
  .requiredOption('-a, --algorithm <string>', 'algorithm name')
  .option('-i, --iterations <number>', 'number of iterations');

const benchmark = (algorithm, size, iterations) => {
  if (!algorithm) {
    throw new Error(`missing algorithm name`);
  }

  if (+size <= 0) {
    throw new Error(`invalid sample size`);
  }

  if (!sortAlgorithms[algorithm] && !algorithm === 'sort') {
    throw new Error(`invalid algorithm ${algorithm}`);
  }

  const itr = +iterations || 1;
  const result = [];
  for (let i = 0; i < itr; i += 1) {
    const list = [];
    for (let i = 0; i < size; i += 1) {
      list.push(Math.floor(Math.random() * size));
    }
    const timer = new Timer(algorithm);
    timer.start();
    if (algorithm === 'sort') {
      list.sort();
    } else {
      sortAlgorithms[algorithm](list);
    }
    timer.stop();
    result.push(timer.format('%lbl: %s seconds %ms ms'));
  }
  return result;
};

const { size, algorithm, iterations } = program.parse(process.argv);

benchmark(algorithm, +size, +iterations).forEach((r) => console.log(r));

