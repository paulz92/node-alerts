const notifier = require('node-notifier');
const request = require('request');

const notify = () => {
  const randomNum = Math.floor(Math.random() * 151) + 1;
  const apiURL = 'https://www.pokeapi.co/api/v2/pokemon-form/' + randomNum + '/';

  request(apiURL, function (err, res, body) {
    if (err) throw err;
    if (res.statusCode === 200) {
      notifier.notify({
        title: 'Pokemon of the Minute',
        message: JSON.parse(body).name
      });
    }
  });
}

setInterval(notify, 5000);