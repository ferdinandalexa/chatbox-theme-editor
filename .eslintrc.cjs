module.exports = {
  root: true,
  extends: [
    'plugin:svelte/recommended',
    './node_modules/eslint-config-semistandard/eslintrc.json'
  ],
  ignorePatterns: ['static', '*-lock.json'],
  overrides: [{
    files: ['*.svelte'],
    parser: 'svelte-eslint-parser'
  }],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2021
  },
  env: {
    browser: true,
    es2017: true,
    node: true
  }
};
