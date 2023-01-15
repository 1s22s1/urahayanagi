module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  plugins: [
    'jest'
  ],
  extends: [
    'standard',
    'plugin:jest/recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
  }
}
