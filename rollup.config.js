import babel from 'rollup-plugin-babel';
import builtins from 'rollup-plugin-node-builtins';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import strip from '@rollup/plugin-strip';

export default {
    input: 'src/index.js',
    output: {
        file: 'dist/index.js',
        format: 'umd'
    },
    plugins: [
        resolve({
            browser: true
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        builtins(),
        babel({
            babelrc: false,
            exclude: 'node_modules/**',
            plugins: ['@babel/plugin-proposal-class-properties'],
            presets: [['@babel/env', { modules: false }]],
        }),
        strip({
            functions: [ 'console.*', 'assert.*' ]
        })
    ],
};