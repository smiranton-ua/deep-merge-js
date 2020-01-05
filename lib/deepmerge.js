const { isObject } = require('./validator');

const merge = (target, ...sources) => {
  if (sources.length < 1) {
    return target;
  }

  sources.forEach(source => {
    if (!isObject(target) || !isObject(source)) {
      return source;
    }

    for (key in source) {
      const targetValue = target[key];
      const sourceValue = source[key];

      if (isObject(targetValue) && isObject(sourceValue)) {
        target[key] = merge(Object.assign({}, targetValue), sourceValue);
      } else {
        target[key] = sourceValue;
      }
    }
  });

  return target;
};

module.exports = merge;
