---
title: 'Getting Started'
sidebar_position: 1
---

## Prerequisite
1. Make sure that you have followed the environment setup instructions properly from the official [React Native docs](https://reactnative.dev/docs/environment-setup).

2. The installation command will fail if you have the global legacy `react-native-cli` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Initialising

Generate a new React Native(**v0.69.4**) app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template --skip-install
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

## Install from GitHub
If you want to use the template directly from the `GitHub` or try out the latest features which are not release to the `npm` yet, then you can run:

```shell
npx react-native init MyApp --template https://github.com/ajaykumar97/react-native-template.git --skip-install
```

## Use Older versions

If you want to use an older version of the template, then you can run(replace `version` with your desired version):

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template@version --skip-install
```

You can look at all versions, that I have published [here](https://github.com/ajaykumar97/react-native-template/releases).

## Configure Bundle Ids, App Name and Google Service Files

If you want to extend the setup further to configure different bundle ids, App Names and Google Service files for **Staging** and **Production** environments, you can follow my [this](https://medium.com/swlh/part-3-configure-bundle-ids-app-name-and-google-service-files-94aed34bbca5) Medium post.


## Make your own template
Enjoying this awesome template feature of `react-native-cli` and want to build your own react-native-template? No worries! I have written a dedicated post to create your own `react-native-template` based your own project needs. You can give it a read [here](https://hackernoon.com/how-to-quickly-create-a-custom-template-in-react-native-4up340g).