module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    /* ESLint rules */
    'indent': [
      'error',
      2
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'always'
    ],
    'eol-last': [
      'error',
      'always'
    ],
    'comma-dangle': [
      'error',
      'always-multiline'
    ],
    'no-empty': [
      'error',
      { "allowEmptyCatch": true }
    ],
    'no-multiple-empty-lines': [
      "warn",
      { max: 1 }
    ],
    /* React rules */
    'react/prefer-stateless-function': [
      'error',
      { 'ignorePureComponents': true }
    ],
    'react/prefer-es6-class': [
      'error',
      'always'
    ],
    'react/no-this-in-sfc': ['error'],
    'react/self-closing-comp': [
      'error', {
        'component': true,
        'html': true
      }
    ]
  }
};