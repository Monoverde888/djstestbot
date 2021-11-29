const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName("user")
		.setDescription('info del usuario'),
	async execute(interaction) {
        await interaction.reply(`Tu Tag: ${interaction.user.tag}\nTu ID: ${interaction.user.id}`);
	},
};