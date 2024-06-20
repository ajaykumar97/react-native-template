---
title: 'Getting Started'
sidebar_position: 1
---

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

## Initialising

Generate a new React Native(**v0.74**) app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init myapp --template @ajaysidhu/react-native-template --skip-install --pm npm --skip-git-init
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

## Install from GitHub
If you want to use the template directly from the `GitHub` or try out the latest features which are not release to the `npm` yet, then you can run:

```shell
npx react-native init myapp --template https://github.com/ajaykumar97/react-native-template.git --skip-install --pm npm --skip-git-init
```

## Notes
1. Starting React Native **v0.74**, Xcode does not start Metro bundler automatically. If you are running the app from the XCode, please make sure that your metro bundler is running before running the build from XCode. You can start the metro bundler by running the following command in the root directory of your newly created project using this template:

```shell
npm start
```

2. Minimum supported versions:
- iOS: 15
- Android: 26

## Use Older versions

If you want to use an older version of the template, then you can run(replace `version` with your desired version):

```shell
npx react-native init myapp --template @ajaysidhu/react-native-template@version --skip-install --pm npm --skip-git-init
```

You can look at all versions, that I have published [here](https://github.com/ajaykumar97/react-native-template/releases).

## Configure Google Service Files

If you want to extend the setup further to configure different Google Service files for **Development**, **Testing**, **Staging** and **Production** environments, you can follow my [this](https://medium.com/swlh/part-3-configure-bundle-ids-app-name-and-google-service-files-94aed34bbca5) Medium post.


## Make your own template
Enjoying this awesome template feature of `react-native-cli` and want to build your own react-native-template? No worries! I have written a dedicated post to create your own `react-native-template` based your own project needs. You can give it a read [here](https://hackernoon.com/how-to-quickly-create-a-custom-template-in-react-native-4up340g).

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
