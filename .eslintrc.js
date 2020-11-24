module.exports = {
  extends: ['prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    quotes: [1, 'single'],
  },
  parser: 'babel-eslint',
};
