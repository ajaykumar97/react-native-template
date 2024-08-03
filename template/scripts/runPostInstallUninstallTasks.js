const exec = require('child_process').exec;
const os = require('os');

const {circle} = require('cli-spinners');

if (os.type() === 'Darwin') {
  let x = 0;
  const loader = setInterval(() => {
    process.stdout.write(
      `\r${
        circle.frames[x++]
      } This step will install all the pods for iOS and can take a while, depending on your internet speed. Thank you for your patience.`,
    );
    x %= circle.frames.length;
  }, circle.interval);

  exec('cd ios && pod install', (error, stdout, stderr) => {
    clearInterval(loader);
    if (error) {
      return console.error(error);
    }
    console.log(stdout);
  });
}
