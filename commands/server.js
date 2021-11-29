const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('info del server'),
	async execute(interaction) {
        await interaction.reply(`Nombre del servidor: ${interaction.guild.name}\nMiembros totales: ${interaction.guild.memberCount}\nServidor creado el: <t:${interaction.guild.createdTimestamp}>`);
	},
};