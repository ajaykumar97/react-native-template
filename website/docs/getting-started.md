---
title: 'Getting Started'
sidebar_position: 1
---

# Initialising

Generate a new React Native(**v0.66.3**) app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template --skip-install
```

You might also be prompted to confirm the installation for the packages `react-native` and `husky`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

:::danger Take care

The above command will fail if you have the global legacy `react-native-cli` installed.

:::

Make sure you uninstall it first:

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Older versions

If you need to use an older version the template, then you will need to run(replace `version` with your desired version):

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template@version --skip-install
```

You can look at all versions, that I have published [here](https://github.com/ajaykumar97/react-native-template/releases).
