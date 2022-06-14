const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { inspect } = require('util');
const admins = ['630070645874622494']

module.exports = {
	name: "eval",
	description: 'Debug A Script directly from bot!',
	usage: '',
	permissions: 'SEND_MESSAGES',
	guildOnly: true,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	async execute(client, message, args) {
    let newMessage = message;
    let restricted = false;
const check1 = message.content.includes('client.destroy()')
const check2 = message.content.includes('process.env')
const check3 = message.content.includes('client.token');
if(check1) restricted = true;
if(check2) restricted = true;
if(check3) restricted = true
          if(restricted == true) return message.channel.send(
				'Sorry You Cant Use These Type Of Scripts. Move On!'
			);
if (
			message.content.includes('client.db') &&
			message.author != '908563963392958464'
		)
			return message.channel.send(
				'This is broken lmao'
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

if(admins.includes(message.author.id)) {


		const embed1 = new MessageEmbed().setTitle('Evaluating...');
		const msg = await message.channel.send({ embeds: [embed1] });
newMessage = msg;
    if(!admins.includes(message.author.id)) console.log('⚠️ WARNING! Owner Did Not Used The Eval Now! WARNING! ⚠️')
		try {
			const data = eval(args.join(' ').replace(/```/g, ''), { depth: 0});
			
const data2 = await data
const embed = new MessageEmbed()
				/*.setTitle('Eval Command');
if(typeof data2 == 'object') {
embed.setDescription(`${JSON.stringify(data2)}`);
} else embed.setDescription(`${data2}`);*/
.setColor('2f3136')
                .addField('Input:\n', '```js\n' + `${args.join(" ").substring(0, 1010)}` + '```', false)
                .addField('Output:\n', '```js\n' + `${inspect(data2, { depth: 0}).substring(0, 1010)}` + '```', false);

                        const buttonRow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId(`evalDone@$(message.author.id}`)
					.setLabel('Done')
					.setStyle('SUCCESS'),
                                new MessageButton()
					.setCustomId(`evalDelete@$(message.author.id}`)
					.setLabel('Delete')
					.setStyle('DANGER'),
			);
			newMessage = await msg.edit({ embeds: [embed], components: [buttonRow] });
const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });

collector.on('collect', async(i) => {
	if (i.user.id === message.author.id) {

		if(i.customId.startsWith('evalDone')) {
await msg.edit({ embeds: [embed], components: [] });
i.reply({ content: `Okay!`, ephemeral: true });
return newMessage;
}
                if(i.customId.startsWith('evalDelete')) {
 await i.reply({ content: `Deleted!`, ephemeral: true });
await msg.delete();
return newMessage;
}
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', async(collected) => {
        if(collected.length <= 0) newMessage = await msg.edit({ embeds: [embed] });
return newMessage;
});
		} catch (error) {
			const embed = new MessageEmbed()
				.setTitle('An Error occured')
				.setDescription(`${error}`);
			console.error(error);
			return await msg.edit({ embeds: [embed] });
		}
	} else {
		message.channel.send(
			'You Dont Have Permission To Use This Command. One Of The Owner Need To Whitelist You To Access This Command.'
		);
		return console.log(
			`${message.author.username} Tried To Use Eval In ${message.guild.name}`
		);
	}

    
return newMessage;
    
	},
};
