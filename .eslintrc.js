module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ['plugin:react/recommended'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    // 缩进 2 个空格
    indent: ['error', 2],
    // 总是使用单引号
    quotes: ['error', 'single'],
    // 总是加分号
    semi: ['error', 'always'],
    // 总是多行的时候加逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 操作符之间加空格
    'space-infix-ops': 'error',
    'no-console': 'warn',
    'no-debugger': 'warn',
  },
};
