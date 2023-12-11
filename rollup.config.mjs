import commonjs from '@rollup/plugin-commonjs';
import terser from '@rollup/plugin-terser';
import {nodeResolve} from '@rollup/plugin-node-resolve';

export default {
  input: 'wwwroot/Scripts/WebSharper/MyCS01/root.js',
  output: {
    file: 'wwwroot/Scripts/WebSharper/bundle.js',
    format: 'iife',
    name: 'wsbundle',
    compact: true
  },
  plugins: [nodeResolve(), commonjs(), terser()]
};
