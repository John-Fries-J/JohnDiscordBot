const { MessageEmbed } = require(discord.js)

module.exports = {
	name: "messageCreate",

	/**
	 * @description Executes when a message is created and handle it.
	 * @author Naman Vrati
	 * @param {Object} message The message which was created.
	 */

	async execute(message, client) {
const prefix = '!';

     if(message.content.startsWith(prefix)) {
       const args = message.content.trim().split(/ +/g);
       const cmd = args[0].slice(prefix.length).toLowerCase();

       if(cmd == 'eval') {
          if (
			message.content.includes('client.destroy()') ||
			message.content.includes('proccess.env') ||
			message.content.includes('client.token')
		) return message.channel.send(
				'Sorry You Cant Use These Type Of Scripts. Move On!'
			);
if (
			message.content.includes('client.db') &&
			message.author != '908563963392958464'
		)
			return message.channel.send(
				'You Better Tell Nishant1500#9735 To Use This For You.'
			);
		if (
			message.content.includes('process.env') &&
			message.author != '908563963392958464'
		)
			return message.channel.send('Can We Just Not?');
		if (
			message.content.includes('rm') &&
			message.author != '908563963392958464'
		)
			return message.channel.send(
				'Imma Better Delete You From My Whitelist .-.'
			);
		if (
			message.content.includes('rm -rf') &&
			message.author != '908563963392958464'
		)
			return message.channel.send(
				'Imma Better Delete You From My Whitelist .-.'
			);
		if (
			message.content.includes('child_process') &&
			message.author != '908563963392958464'
		)
			return message.channel.send(
				'Do I Look Like A Child To You? I Am A Bot .-.'
			);

		const embed = new MessageEmbed().setTitle('Evaluating...');
		const msg = await message.channel.send(embed);
    if(message.author.id != '908563963392958464') console.log('⚠️ WARNING! Owner Did Not Used The Eval Now! WARNING! ⚠️')
		try {
			const data = eval(args.join(' ').replace(/```/g, ''));
			const embed = new MessageEmbed()
				.setTitle('Eval Command')
				.setDescription(await data);
			await msg.edit(embed);
			await msg.react('✅');
			await msg.react('❌');
			const filter = (reaction, user) =>
				(reaction.emoji.name === '❌' || reaction.emoji.name === '✅') &&
				user.id === message.author.id;
			msg.awaitReactions(filter, { max: 1 }).then(collected => {
				collected.map(emojis => {
					switch (emojis._emoji.name) {
						case '✅':
							msg.reactions.removeAll();
							break;
						case '❌':
							msg.delete();
							break;
					}
				});
			});
		} catch (error) {
			const embed = new MessageEmbed()
				.setTitle('An Error occured')
				.setDescription(error);
			console.error(error);
			return await msg.edit(embed);
		}
	} else {
		message.channel.send(
			'You Dont Have Permission To Use This Command. One Of The Owner Need To Whitelist You To Access This Command.'
		);
		return console.log(
			`${message.author.username} Tried To Use Eval In ${message.guild.name}`
		);
	}


       }

     }
}
