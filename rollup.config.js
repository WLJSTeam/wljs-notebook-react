import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'index.jsx',
  output: [
    {
      file: 'dist/index.cjs.js',
      format: 'cjs',
      exports: 'named',
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      presets: ['@babel/preset-env', '@babel/preset-react'],
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
  ]
};