const dotenv = require('dotenv');
dotenv.config();
// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
        await interaction.reply(`Nombre del servidor: ${interaction.guild.name}\nMiembros totales: ${interaction.guild.memberCount}\nServidor creado el: <t:${interaction.guild.createdTimestamp}>`);
	} else if (commandName === 'user') {
		await interaction.reply(`Tu Tag: ${interaction.user.tag}\nTu ID: ${interaction.user.id}`);
	} else if (commandName === "robarbanner") {
        interaction.user.fetch(true)
        await interaction.reply(`${interaction.user.bannerURL}`)
    }
});

// Login to Discord with your client's token
client.login(process.env.token);