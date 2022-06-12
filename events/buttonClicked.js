module.exports = {
	name: "interactionCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(interaction, client) {
     if (!interaction.isButton()) return;
  }
}
