module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ["import"],
  rules: {
    // eslint-plugin-import
    "import/first": 1,
    "import/newline-after-import": 1,
    "import/no-cycle": 2,
    "import/no-duplicates": 1,
    "import/no-unresolved": 2,
  }
};
