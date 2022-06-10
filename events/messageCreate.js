module.exports = {
	name: "messageCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(message, client) {
     if(message.content.toLowerCase().includes(`<@${client.user.id}>`)) {
       message.reply({
         content: 'Blank message as John said.'
       })
     }
  }
}
