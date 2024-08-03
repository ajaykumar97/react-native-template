const {defaults: tsjPreset} = require('ts-jest/presets');

/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  ...tsjPreset,
  preset: 'react-native',
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-redux|unist-util-visit|unist-util-is|mdast-util-to-string|mdast-util-from-markdown|micromark|parse-entities|character-entities|unist-util-stringify-position))',
  ],
  setupFiles: [
    './node_modules/react-native-gesture-handler/jestSetup.js',
    './jest.setup.js',
  ],
};
