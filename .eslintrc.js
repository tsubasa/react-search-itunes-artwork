'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true,
  },
  plugins: [
    '@typescript-eslint',
    'react',
  ],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        bracketSpacing: true,
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'none',
        useTabs: false,
        jsxBracketSameLine: false,
        parser: 'typescript'
      }
    ],
    'no-console': [
      'warn',
      {
        allow: ['error', 'warn']
      }
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    ]
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.dev.js'
      }
    },
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node'],
    },
  }
};
