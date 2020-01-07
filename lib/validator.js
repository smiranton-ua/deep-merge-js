export const isObject = value => {
  return !!value
    && typeof value === 'object'
    && typeof value.getMonth !== 'function'
    && !Array.isArray(value);
};
