var exec = require('child_process').exec;
var os = require('os');

function logOutput(error, stdout, stderr) {
  console.log(stdout);
}

if (os.type() === 'Darwin') {
  exec('cd ios && pod install', logOutput);
}
