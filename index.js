const dotenv = require('dotenv');
dotenv.config();
const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

      if (commandName === 'server') {
       
	} else if (commandName === 'user') {
		await interaction.reply(`Tu Tag: ${interaction.user.tag}\nTu ID: ${interaction.user.id}`);
	} else if (commandName === "robarbanner") {
        interaction.user.fetch(true)
        await interaction.reply(`${interaction.user.bannerURL}`)
    }
});

// Login to Discord with your client's token
client.login(process.env.token);