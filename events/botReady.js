var colors = require('colors');

module.exports = {
	name: "ready",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(ready, client) {
    console.log(`${client.user.tag}`.brightGreen + ' is ready to be on the stage!')
  }
}
