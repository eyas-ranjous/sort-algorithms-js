module.exports = (list, i, j) => {
  const l = list;
  const temp = l[i];
  l[i] = l[j];
  l[j] = temp;
};
