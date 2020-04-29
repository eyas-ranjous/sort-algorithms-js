const Timer = require('timer-node');
const { program } = require('commander');

const sortAlgorithms = require('../index');

program
  .requiredOption('-s, --size <number>', 'sample size')
  .requiredOption('-a, --algorithms <items>', 'algorithms list');

const benchmark = (algorithms, size) => {
  if (!Array.isArray(algorithms)) {
    throw new Error(`invalid algorithms list`);
  }

  if (size <= 0) {
    throw new Error(`invalid sample size`);
  }

  const result = [];
  const list = [];

  for (let i = 0; i < size; i += 1) {
    list.push(Math.floor(Math.random() * size));
  }

  algorithms.forEach((algorithm) => {
    if (!sortAlgorithms[algorithm] && !algorithm === 'sort') {
      throw new Error(`invalid algorithm ${algorithm}`);
    }
    const listClone = list.slice(0);
    const timer = new Timer(algorithm);

    timer.start();
    if (algorithm === 'sort') {
      listClone.sort();
    } else {
      sortAlgorithms[algorithm](listClone);
    }
    timer.stop();
    result.push(timer.format('%lbl: %s seconds %ms ms'));
  });
  return result;
};

const { size, algorithms } = program.parse(process.argv);

const result = benchmark(algorithms.split(','), +size);

result.forEach((r) => console.log(r));

