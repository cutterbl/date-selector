import path from 'path';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import clear from 'rollup-plugin-clear';
import json from '@rollup/plugin-json';
import { eslint } from 'rollup-plugin-eslint';
import cleanup from 'rollup-plugin-cleanup';
import pkg from '../package.json';

const externalDependencies = Object.keys(pkg.dependencies).filter(
  (it) => it !== '@babel/runtime'
);
const banner = `/* ${pkg.name} version ${pkg.version} © 2020 Cutter's Crossing */`;

export default [
  {
    input: path.join(__dirname, '../src/index.js'),
    context: 'this',
    output: [
      {
        file: pkg.module,
        format: 'es',
        banner: banner,
        sourcemap: true,
      },
      {
        file: pkg.main,
        format: 'cjs',
        banner: banner,
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins: [
      clear({
        targets: [path.join(__dirname, '../dist')],
        watch: true,
      }),
      resolve({
        // only include local code (imports that begin with './' and '../') in the bundle
        //only: [/^\.{0,2}\//],
        browser: true,
      }),
      json(),
      eslint({
        // second entry covers 'npm link' situations
        exclude: [/node_modules/, /ul-ui-core/, /.scss$/],
      }),
      babel({
        babelHelpers: 'runtime',
        exclude: ['/node_modules/**'],
      }),
      //sizeSnapshot(),
      cleanup(),
    ],
    external: [...externalDependencies, /@babel\/runtime/],
  },
];
