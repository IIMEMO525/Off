const mineflayer = require('mineflayer');

const bot = mineflayer.createBot({
  host: 'King_Craft-5.exaroton.me', // عنوان السيرفر
  port: 55895,            // منفذ السيرفر
  username: 'BOT 24/7 H' // اسم مستعار للبوت
});

bot.on('login', () => {
  console.log('Bot logged in!');
  bot.chat('Hello, I am a bot!');
});

bot.on('chat', (username, message) => {
  if (username === bot.username) return;
  bot.chat(`Hello ${username}, you said: ${message}`);
});
