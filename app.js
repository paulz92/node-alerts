const notifier = require('node-notifier');
const request = require('request');

////////// comment this in/pokemon out for notifications that either insult or compliment you each minute
// const InsultCompliment = require("insult-compliment");

// const notify = () => {
//   let action;
//   let randomNum = Math.floor(Math.random() * 100);

//   if (randomNum > 30) {
//     action = InsultCompliment.Insult();
//   } else {
//     action = InsultCompliment.Compliment();
//   }
  
//   notifier.notify({
//     title: 'Hey you',
//     message: action
//   });
// }

const notify = () => {
  const pokeNum = Math.floor(Math.random() * 151) + 1;
  const apiURL = 'https://www.pokeapi.co/api/v2/pokemon-form/' + pokeNum + '/';

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

setInterval(notify, 60000);