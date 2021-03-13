[![](https://img.shields.io/npm/v/@ajaysidhu/react-native-template.svg?style=flat)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![](https://img.shields.io/npm/dt/@ajaysidhu/react-native-template.svg)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


# react-native-template

A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure.

Key features:
- Folder structure
- Navigation using `react-navigation`(v5)
- State management using `redux`
- Redux middleware `redux-saga`
- Splash screen
- API request using `axios`
- Localization using `react-native-localization`
- Responsive UI using `react-native-size-matters`

## Getting Started

This template is base on the React-Native v0.63.4. To create a new project using the template, use the `init` command like:

```bash
npx react-native init MyApp --template @ajaysidhu/react-native-template
```

**Note:** The above command will fail if you have the global legacy `react-native-cli` installed. Make sure you uninstall it first(only if you have the old version of the  `react-native-cli`):

```bash
npm uninstall -g react-native-cli
```
or
```bash
yarn global remove react-native-cli
```

Then run the above `npx` command again.

More info can be found at [react-native-community/cli](https://github.com/react-native-community/cli#about).
