const validator = require('./validator.js');

describe('Validator tests', () => {
  it('Should pass beacuse of object', () => {
    expect(validator.isObject({})).toBe(true);
  });
  it('Should pass beacuse of Array', () => {
    expect(validator.isObject(Array)).toBe(false);
  });

  it('Should fail because of array', () => {
    expect(validator.isObject([])).toBe(false);
  });

  it('Should fail because of number', () => {
    expect(validator.isObject(1)).toBe(false);
  });

  it('Should fail because of string', () => {
    expect(validator.isObject('1111')).toBe(false);
  });

  it('Should fail because of symbol', () => {
    expect(validator.isObject(Symbol())).toBe(false);
  });
});
