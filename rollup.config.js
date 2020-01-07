import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: './lib/deepmerge.js',
  output: [{
    file: pkg.main,
    format: 'umd'
  }],
  plugins: [
    terser()
  ]
};
