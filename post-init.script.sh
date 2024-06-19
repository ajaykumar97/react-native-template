#!/bin/sh

echo "\nInitializing git repository\n"
git init

echo "\nInitializing husky (if prompted, please hit return/enter key for the next prompt)\n"
npx husky-init

echo "\nInstalling node_modules\n"
npm install

echo "\nInitializing husky hooks\n"
npx husky set .husky/pre-commit "npm run lint"

git add .
git commit -m "initial commit"

echo 'ENV=development' > .env.development
echo 'ENV=testing' > .env.testing
echo 'ENV=staging' > .env.staging
echo 'ENV=production' > .env.production

echo "Please refer to the Readme.md file for instructions on running the project for Android and iOS."
