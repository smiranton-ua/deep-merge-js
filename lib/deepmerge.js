import { isObject } from './validator';

const merge = (...sources) => {
  const onlyObjects = sources.filter(s => isObject(s));

  // in case of not valid objects in the arguments
  if (onlyObjects.length === 0) {
    return {};
  }

  // in case of only one valid object in the arguments
  if (onlyObjects.length === 1) {
    return onlyObjects[0];
  }

  const [target, ...rest] = onlyObjects;

  rest.forEach(object => {
    for (const key in object) {
      const targetValue = target[key];
      const sourceValue = object[key];

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
