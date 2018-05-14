const notifier = require('node-notifier');
const InsultCompliment = require("insult-compliment");

const notify = () => {
  let action;

  let randomNum = Math.floor(Math.random() * 2);

  if (randomNum === 0) {
    action = InsultCompliment.Insult();
  } else {
    action = InsultCompliment.Compliment();
  }
  
  notifier.notify({
    title: 'Hey you',
    message: action
  });
}

setInterval(notify, 5000);