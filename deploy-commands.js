const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const dotenv = require('dotenv');
dotenv.config();
const { clientId, guildId, token } = process.env
const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('PONG!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'),
	new SlashCommandBuilder().setName('server').setDescription('Responde con informacion del servidor!'),
	new SlashCommandBuilder().setName('user').setDescription('Responde con informacion del usuario!'),
    new SlashCommandBuilder().setName("robarbanner").setDescription("te deja robarle el banner a alguien 😈")
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);