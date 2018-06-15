module.exports = (list) => {
  if (!Array.isArray(list)) {
    throw new Error(`"${list}" is not an array`);
  }
};
