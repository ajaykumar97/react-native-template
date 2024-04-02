---
title: 'Project Structure'
sidebar_position: 3
---

# Project Structure

```
root
├── .husky
├── __tests__
├── android
├── ios
├── node_modules
├── scripts
│   └── runPostInstallUninstallTasks.js
├── src
│   ├── assets
│   │   ├── fonts
│   │   └── icons
│   ├── commonComponents
│   ├── localization
|   |   ├── en.json
|   |   └── index.tsx
│   ├── navigation
│   │   ├── AppNavigator.tsx
│   │   ├── AuthNavigator.tsx
│   │   └── MainNavigator.tsx
│   ├── screens
│   │   ├── AuthScreens
│   │   └── MainAppScreens
│   ├── store
│   │   ├── index.tsx
│   │   └── reducers.tsx
│   ├── utilities
│   │   ├── constants
│   │   ├── helperFunctions
│   │   ├── layout.tsx
│   │   ├── logger.tsx
│   │   ├── navigationService.tsx
│   │   └── request.tsx
│   └── App.tsx
├── .env.development
├── .env.production
├── .env.staging
├── .env.template
├── .env.testing
├── index.js
├── react-native.config.js
└── package.json
```