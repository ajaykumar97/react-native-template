---
title: 'Scripts'
sidebar_position: 4
---

The `scripts` section of the `package.json` contains few handy scripts to automate some common operations. You can run any of the desired script like:

```bash
npm run <script-name>
```

For example, to run `androidStagingDebug`:
```bash
npm run androidStagingDebug
```

or, using npm:

```bash
npm run androidStagingDebug
```

## androidDevelopmentDebug
It will run the `debug` android build with `development` varient.

## androidTestingDebug
It will run the `debug` android build with `testing` varient.

## androidStagingDebug
It will run the `debug` android build with `staging` varient.

## androidProductionDebug
It will run the `debug` android build with `production` varient.

## iosDevelopmentDebug
It will run the `debug` iOS build with `development` scheme.

## iosTestingDebug
It will run the `debug` iOS build with `testing` scheme.

## iosStagingDebug
It will run the `debug` iOS build with `staging` scheme.

## iosProductionDebug
It will run the `debug` iOS build with `production` scheme.

## start
It will start the `Metro Bundler`.

## test
It will run all of the test cases.

## test:watch
It will run the all of the test cases or the specified test case(after the `test` command) in `watch` mode. It will automatically re-run the test cases if any of the `test case` or the `.js` file will be changed.

## lint
It will check the whole codebase for the `lint` issues.

## postinstall
These are the set of tasks which will run after every dependency installation. These tasks are:
  - If you are running the project on MacOS, the it will automatically install the `pods` in the `ios` directory. If you are not on a MacOS machine, then it will skip the installing the pods.

## uninstall
It will run all of the tasks mentioned in the `postinstall` script above after uninstalling any dependency.
