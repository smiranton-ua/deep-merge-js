function isObject(value) {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

module.exports = {
  isObject
};
