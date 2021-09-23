---
title: 'Project Structure'
sidebar_position: 3
---

# Project Structure

```
root
├── .husky
├── android
├── ios
├── node_modules
├── scripts
├── src
│   ├── assets
│   │   ├── fonts
│   │   ├── icons
│   │   └── index.js
│   ├── commonComponents
│   ├── localization
|   |   ├── en.js
|   |   └── index.js
│   ├── navigation
│   │   ├── AppNavigator.js
│   │   ├── AuthNavigator.js
│   │   └── MainNavigator.js
│   ├── screens
│   │   ├── AuthScreens
│   │   └── MainAppScreens
│   ├── store
│   │   ├── index.js
│   │   ├── reducers.js
│   │   └── sagas.js
│   ├── utilities
│   │   ├── constants
│   │   ├── helperFunctions
│   │   ├── layout.js
│   │   ├── logger.js
│   │   ├── NavigationService.js
│   │   └── request.js
│   └── App.js
├── tests
├── .env
├── .env.production
├── .env.staging
├── .env.template
├── index.js
└── package.json
```