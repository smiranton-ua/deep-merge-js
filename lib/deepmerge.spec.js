import merge from './deepmerge.js';

describe('Merge tests', () => {
  it('Should pass', () => {
    expect(merge({ a: 1 }, { b: 1 })).toMatchObject({ a: 1, b: 1 });
  });

  it('Should pass', () => {
    expect(merge({ a: 1 }, [], 1, {}, 'string')).toMatchObject({ a: 1 });
  });

  it('Should pass', () => {
    expect(merge({ a: 1 }, { a: 2 })).toMatchObject({ a: 2 });
  });

  it('Should pass', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3]
      }
    };
    const obj2 = {
      a: 1,
      c: {
        b: [1, 2, 3]
      }
    };

    const result = merge(obj1, obj2);

    expect(result).toEqual({
      a: 1,
      b: {
        c: [1, 2, 3]
      },
      c: {
        b: [1, 2, 3]
      }
    });
  });

  it('Should pass', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3]
      }
    };
    const obj2 = {
      a: 2,
      b: {
        c: [1, 2, 3, 4, 5]
      }
    };

    expect(merge(obj1, obj2)).toEqual({
      a: 2,
      b: {
        c: [1, 2, 3, 4, 5]
      }
    });
  });

  it('Should pass', () => {
    const obj1 = {
      a: 1,
      b: {
        c: [1, 2, 3]
      }
    };
    const obj2 = {
      a: 2,
      b: {
        c: [1, 2, 3, 4, 5]
      }
    };
    const obj3 = {
      a: 3,
      b: {
        c: [1, 2, 3, 4, 5, 6, 7]
      }
    };

    expect(merge(obj1, obj2, obj3)).toEqual({
      a: 3,
      b: {
        c: [1, 2, 3, 4, 5, 6, 7]
      }
    });
  });

  it('Should pass', () => {
    const obj1 = {
      a: 1,
      b: {
        b: {
          b: {
            b: 10
          }
        }
      }
    };
    const obj2 = {
      a: 1,
      b: {
        b: {
          b: {
            b: 20
          }
        }
      }
    };

    expect(merge(obj1, obj2)).toEqual({
      a: 1,
      b: {
        b: {
          b: {
            b: 20
          }
        }
      }
    });
  });

  it('Should pass', () => {
    const obj1 = {
      a: 1,
      b: {
        b: {
          c: {
            b: 10
          }
        }
      }
    };
    const obj2 = {
      a: 1,
      b: {
        b: {
          b: {
            b: 20
          }
        }
      }
    };

    expect(merge(obj1, obj2)).toEqual({
      a: 1,
      b: {
        b: {
          b: {
            b: 20
          },
          c: {
            b: 10
          }
        }
      }
    });
  });

  it('Should pass', () => {
    const obj1 = { a: 3 };
    const obj2 = { a: { b: 4 } };
    expect(merge(obj1, obj2)).toEqual({ a: { b: 4 } });
  });

  it('Should pass', () => {
    const obj1 = { a: [1, 2, 4] };
    const obj2 = { a: { b: 4 } };
    expect(merge(obj1, obj2)).toEqual({ a: { b: 4 } });
  });

  it('Should pass', () => {
    const obj1 = { a: { b: [1, 2, 4] } };
    const obj2 = { a: { c: 4 } };
    expect(merge([1, 2, 3], obj1, obj2)).toEqual({ a: { b: [1, 2, 4], c: 4 } });
  });

  it('Should pass', () => {
    expect(merge([], '', 12112)).toEqual({});
  });

  it('Should pass', () => {
    const obj1 = { a: { c: 4 } };
    expect(merge(obj1, new Date())).toEqual(obj1);
  });
});
