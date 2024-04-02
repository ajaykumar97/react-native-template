#!/bin/sh

echo "\nInitializing git repository\n"
git init

echo "\nInitializing husky (if asked, please hit return/enter key for the next prompt)\n"
npx husky-init

echo "\nInstalling node_modules\n"
npm install

echo "\nInitializing husky hooks\n"
npx husky set .husky/pre-commit "npm run test && npm run lint"

echo 'ENV=development' > .env.development
echo 'ENV=testing' > .env.testing
echo 'ENV=staging' > .env.staging
echo 'ENV=production' > .env.production