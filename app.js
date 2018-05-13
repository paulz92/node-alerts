const notifier = require("node-notifier");

const notify = () => notifier.notify('hello world');

setInterval(notify, 5000);