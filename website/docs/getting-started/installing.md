---
sidebar_position: 1
---

# Installing

Generate a new React-Native app using the **@ajaysidhu/react-native-template**:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template
```

After that, we need to install the dependencies to use the project on iOS(you can skip this part, if you are using this on Android).

Now run a simple: `npx pod-install` or `cd ios && pod install`. After that, you should be able to use the newly initialised app on both Platforms, iOS and Android.

:::danger Take care

The above command will fail if you have the global legacy `react-native-cli` installed.

:::

Make sure you uninstall it first(only if you have the old version of the `react-native-cli`):

```shell
yarn global remove react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native-cli
```

## Older versions

If you need to use an older version the template, then you will need to run:

```shell
npx react-native init MyApp --template @ajaysidhu/react-native-template@version
```

You can look at all versions, that I have published [here](https://github.com/ajaykumar97/react-native-template/releases).
