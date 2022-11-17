const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
    
    client.setInterval(() => {
    console.log(Math.random() * 100);
    }, 500);
});

client.login('INSERT TOKEN HERE');
