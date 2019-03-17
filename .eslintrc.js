'use strict';

module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname, // @see https://github.com/typescript-eslint/typescript-eslint/issues/251
    useJSXTextNode: true
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
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
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/interface-name-prefix': ['warn', 'always'],
    '@typescript-eslint/no-object-literal-type-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-console': ['warn', { allow: ['error', 'warn'] }],
    'react/prop-types': 'off'
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: './webpack.config.js'
      }
    },
    react: {
      version: '999.9999' // TODO: https://github.com/yannickcr/eslint-plugin-react#configuration
    }
  }
};
