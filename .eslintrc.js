module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],

  globals: {
    page: true,
    API_BASE: true,
  },

  rules: {
    quotes: 2,
    'no-console': 0,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 0,
    'no-unused-expressions': 0,
  },
};
