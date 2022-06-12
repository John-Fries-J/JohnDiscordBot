const { Collection } = require('discord.js');

module.exports = {
	name: "interactionCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(interaction, client) {
     // Deconstructed client from interaction object.
		const { commandName, user  } = interaction;

		// Checks if the interaction is a command (to prevent weird bugs)

		if (!interaction.isCommand()) return;
    
     // Cooldowns

		const { cooldowns } = client;

		if (!cooldowns.has(commandName)) {
			cooldowns.set(commandName, new Collection());
		}

		const now = Date.now();
		const timestamps = cooldowns.get(commandName);
		const cooldownAmount = (3) * 1000;

		if (timestamps.has(interaction.user.id)) {
			const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

			if (now < expirationTime) {
				const timeLeft = (expirationTime - now) / 1000;
				return interaction.reply({
					content: `Please wait **${timeLeft.toFixed(
						1
					)}** more second(s) before reusing the \`${commandName}\` command.`,
          ephemeral: true,
				});
			}
		}

		timestamps.set(interaction.user.id, now);
		setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);


        if (commandName === 'info') {
            interaction.reply({ 
                content: `${user}\n:one:  Go to https://musx.io/ \n:two:  Sign with Discord \n:three:  Sign in with Last.FM (Go to spotify scrobbling in lastfm settings and link your Spotify Account :white_check_mark:)  \n:four:  Use command !points to check your points, or go to https://musx.io/ (Type it in :robot:︱bot-commands or :thought_balloon:︱general) \n:five:  Use !rewards to see the available rewards. \n:six:  Use !claim (number) for the reward you wish to receive.  Example: !claim 1`,
                ephemeral: false,
            })
        }

        if (commandName === 'commands') {
            interaction.reply({ 
                content: '__**!bot**__ - Sends message about the bot developer \n__**!rules**__ - Directs users to the rules channel \n__**!info**__ - Sends info on how to participate in the giveaways \n __**/info**__ - Replies with information about giveaways we host.',
                ephemeral: false,

            })
        }
  }
}
