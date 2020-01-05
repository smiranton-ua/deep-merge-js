# deep-merge-js

Deeply merges javascript objects.

## Getting Started

### Example Usage

```js
const merge = require('deep-merge-js')

const obj1 = {
  foo: 1,
  bar: [1, 2, 3]
}

const obj2 = {
  foo: 2,
  baz: {
    test: [1, 2, 3]
  }
}


merge(obj1, obj2);

/*
  Output will be
  {
    foo: 1,
    bar: [1, 2, 3],
    baz: {
      test: [1, 2, 3]
    }
  }
*/
```

### Installation

With [npm](http://npmjs.org) do:

```sh
npm install deep-merge-js
```

### Include

```
const merge = require('deep-merge-js')
```

# API

## `merge(x, y, ...args)`

Merge two and more objects deeply.

# Testing

With [npm](http://npmjs.org) do:

```sh
npm test
```


# License

MIT
