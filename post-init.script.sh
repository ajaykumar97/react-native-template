#!/bin/sh

echo "Initializing husky"
npx husky-init && yarn
npx husky add .husky/pre-commit "yarn test && yarn lint"