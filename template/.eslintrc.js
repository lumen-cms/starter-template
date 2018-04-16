module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/recommended', 'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue', 'graphql'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "indent": "off",
    "indent-legacy": ["error", 2],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'vue/max-attributes-per-line': [2, {
      'singleline': 4,
      'multiline': {
        'max': 4,
        'allowFirstLine': true
      }
    }]
  }
}
