const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot başarıyla giriş yaptı!');
});

client.on('messageCreate', message => {
  if (message.content === 'okey') {
    message.channel.send('Okey, tamamdır!');
  }
});

client.login(process.env.TOKEN);
