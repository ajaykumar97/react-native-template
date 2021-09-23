[![](https://img.shields.io/npm/v/@ajaysidhu/react-native-template.svg?style=flat)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![](https://img.shields.io/npm/dt/@ajaysidhu/react-native-template.svg)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


# react-native-template

A starter kit for initializing a new React-Native project with some commonly used preconfigured libraries and the folder structure.

## Key features:
- Pre-configured folder structure
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [redux](https://redux.js.org/)
- Redux middleware [redux-saga](https://redux-saga.js.org/)
- Git hooks using [husky](https://typicode.github.io/husky/#/)
- Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config)
- Image caching using [react-native-fast-image](https://github.com/DylanVann/react-native-fast-image)
- Splash screen using [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash)
- API request using [axios](https://axios-http.com/)
- Localization using [react-native-localization](https://github.com/stefalda/ReactNativeLocalization)
- Responsive UI using flexbox and [react-native-size-matters](https://github.com/nirsky/react-native-size-matters)


## Quick start

Generate a new React Native(**v0.65.1**) app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template --skip-install
```

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

## IMPORTANT

The above command will fail if you have the global legacy `react-native-cli` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Digging Deeper

Check out the [documentation website](https://ajaykumar97.github.io/react-native-template/) to learn more about the template.
