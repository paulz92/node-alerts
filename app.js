// import npm packages
// notifier for windows system notifications      https://www.npmjs.com/package/node-notifier
// request for http requests out to api           https://www.npmjs.com/package/request
const notifier = require('node-notifier');
const request = require('request');

// notifier function
const notify = () => {
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const apiURL = 'https://www.pokeapi.co/api/v2/pokemon-form/' + randomNum + '/';
  
  // send request
  request(apiURL, function (err, res, body) {
    if (err) throw err;
    if (res.statusCode === 200) {
      notifier.notify({
        title: 'Random Pokemon',
        message: JSON.parse(body).name
      });
    }
  });
}
// set interval for notifications
// if notifying for a socket connection/on updates to an api/etc, write JS accordingly
setInterval(notify, 10000);

// TO DO
// investigate how to run node app at windows login without having to bring up bash/powershell/terminal/etc
//   - https://www.npmjs.com/package/auto-launch
//   - https://www.npmjs.com/package/node-windows, https://github.com/coreybutler/node-mac, https://github.com/coreybutler/node-linux
// investigate compatibility with node-notifier across OSs 