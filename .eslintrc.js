module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'space-before-blocks': 2,
    'no-trailing-spaces': 2,
    'no-multi-spaces': 2,
    quotes: [1, 'single'],
  },
  parser: 'babel-eslint',
};
