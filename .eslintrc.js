'use strict';

module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
    useJSXTextNode: true
  },
  plugins: [
    '@typescript-eslint',
    'react'
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
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.dev.js'
      }
    },
    node: {
      tryExtensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.node']
    }
  }
};
