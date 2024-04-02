[![](https://img.shields.io/npm/v/@ajaysidhu/react-native-template.svg?style=flat)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![](https://img.shields.io/npm/dt/@ajaysidhu/react-native-template.svg)](https://www.npmjs.com/package/@ajaysidhu/react-native-template)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)


# react-native-template

A starter kit for initializing a new React-Native project to save at least 1 week's worth of effort with some commonly used preconfigured libraries and folder structure.

<p align="center">
  <img height="400" alt="react-native-template installation" src="https://raw.githubusercontent.com/ajaykumar97/images-container/main/react-native-template/react-native-template-installation.gif">
</p>

## Key features:
- Pre-configured folder structure
- Common authentication screens(Login, Signup, Forgot Password) and flow
- Reusable common components, utility functions and constants
- Navigation using [react-navigation](https://reactnavigation.org/) (v6)
- State management using [redux-toolkit](https://redux-toolkit.js.org/)
- Git hooks using [husky](https://typicode.github.io/husky/#/)
- Development, Testing, Staging and Production environment configurations using [react-native-config](https://github.com/luggit/react-native-config#readme)
  - Bundle Ids
  - Splash screens
  - App icons
  - Environment variables
  - Application names
- TDD(Test-Driven Development) using [jest](https://jestjs.io/)
- (Unsecured) local data storage using [AsyncStorage](https://github.com/react-native-async-storage/async-storage#readme)
- (Secured) local data storage using [react-native-keychain](https://github.com/oblador/react-native-keychain#readme)
- Splash screen using [expo-splash-screen](https://docs.expo.dev/versions/latest/sdk/splash-screen/)
- API requests using [axios](https://axios-http.com/)
- Localization using [i18next](https://www.i18next.com/)
- Responsive UI using flexbox and [react-native-size-matters](https://github.com/nirsky/react-native-size-matters#readme)
- SVG files support using [react-native-svg](https://github.com/software-mansion/react-native-svg#readme) and [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer#readme)
- [Logger](https://github.com/ajaykumar97/react-native-simple-logger) to log data more clearly using coloured logs in Chrome Debugger

## Prerequisite
1. Make sure that you have followed the environment setup instructions properly from the official [React Native docs](https://reactnative.dev/docs/environment-setup).

2. Make sure that your Cocoapods version is >= 3.5.7. If its lower than 3.5.7, you can update it using the following command:

```shell
sudo gem install cocoapods
```

3. The installation command will fail if you have the global legacy `react-native-cli` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Quick start

Generate a new React Native(**v0.73**) app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init myapp --template @ajaysidhu/react-native-template --skip-install
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).


## Notes
1. Starting React Native **v0.74**, Xcode does not start Metro bundler automatically. If you are running the app from the XCode, please make sure that your metro bundler is running before running the build from XCode. You can start the metro bundler by running the following command in the root directory of your newly created project using this template:

```shell
npm start
```

2. Minimum supported versions:
- iOS: 15
- Android: 26

## Digging Deeper

Check out the [documentation website](https://ajaykumar97.github.io/react-native-template/) to learn more about the template.

## Configure Google Service Files

If you want to extend the setup further to configure Google Service files for **Development**, **Testing**, **Staging** and **Production** environments, you can follow my [this](https://medium.com/swlh/part-3-configure-bundle-ids-app-name-and-google-service-files-94aed34bbca5) Medium post.

## Need further help?
Thank you for choosing our React Native Template for your mobile app development needs. We're thrilled to contribute to your project's success!

Should you encounter any issues, have questions, or need further assistance using our package to initialise your new mobile app, please don't hesitate to reach out. Our team at Diligentic Infotech is here to help you every step of the way.

Feel free to visit our website [Diligentic Infotech](https://diligentic.com/get-in-touch) to learn more about our services and how we can support your mobile app development journey.

Happy coding, and we look forward to hearing from you!

## Roadmap
- [x] Add [react-native-keychain](https://github.com/oblador/react-native-keychain) for secured user data storage
- [ ] Add dark mode
- [ ] Add docs to explain provided common components usages
- [ ] Add atomic structure for components
- [ ] Add common styles
- [ ] Add website docs versioning
- [ ] Add RTL languages support
