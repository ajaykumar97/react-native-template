module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/first': 1,
    'import/newline-after-import': 1,
    'import/no-cycle': 2,
    'import/no-duplicates': 1,
    'import/no-unresolved': 2,
  },
  env: {
    'jest/globals': true,
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
    },
  },
};
