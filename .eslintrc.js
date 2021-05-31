module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    document: true,
    window: true,
  },
  extends: [
    "eslint:recommended"
    // 'plugin:vue/essential',
    // '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-unused-vars': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-param-reassign': process.env.NODE_ENV === 'production' ? 'warn' : 'warn',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'max-len': 'off',
    'prefer-object-spread': 'off',
    'import/prefer-default-export': 'off',
    'no-multiple-empty-lines': 'off',
  },
  ignorePatterns: ["node_modules/", "style.css"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // parserOptions: {
  //   parser: 'module',
  // },
};
