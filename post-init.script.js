#!/usr/bin/env node

var exec = require('child_process').exec;

function logOutput(error, stdout, stderr) {
  console.log(stdout);
}

console.log('\nInitializing husky\n');
exec('npx husky-init && yarn', logOutput);
exec('npx husky add .husky/pre-commit "yarn test && yarn lint"', logOutput);
