## Using the boilerplate

To create a new project using the boilerplate:

# Mendatory step
- clone this repository: `git clone https://github.com/ajaykumar97/react_native_project_boilerplate`

# Optional steps
- remove the previous git history: `rm -rf .git/`
- install the npm dependencies by running `yarn` or `npm install`
- rename the React Native project to your own project name: `react-native-rename <newName>` (the default name is `Boilerplate`).

You can install `react-native-rename`  by:

``yarn global add react-native-rename``

or

``npm install react-native-rename -g``

You can now create a new git repository for your project (using `git init`) and create the first commit.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)
- `react-native run-ios` or open `Boilerplate.xcworkspace` from `ios` folder to run the iOS application (remember to start a simulator or connect an iPhone)

## Android notes:

1. To avoid any error like ``SDK location not found`` while running ``react-native run-android``, please open the project in Android Studio for the first time so that Android Studio could automatically insert the Android SDK path and other configuration settings.

2. To avoid error like: ``debug.keystore not found for signing config 'debug'``, run the following command in the ``android/app/`` directory of the project to generate a debug keystore file:

``keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000``
