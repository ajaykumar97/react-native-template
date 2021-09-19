#!/bin/sh

echo "\nInitializing git repository\n"
git init
echo "\nInitializing husky\n"
npx husky-init
echo "\nInitializing node_modules\n"
yarn install
echo "\nInitializing husky hooks\n"
npx husky add .husky/pre-commit "yarn test && yarn lint"