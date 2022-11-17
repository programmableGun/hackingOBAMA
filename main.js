const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
    
    client.setInterval(() => {
    console.log(Math.random() * 100);
    }, 500);
});

client.login('NzgyNzk5MzYyMjM3MDA1ODM1.X8Rctw.Owa982bqeqs_9X1K85JXrzjYWpk');