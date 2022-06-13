const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const { inspect } = require('util');

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
       const args = message.content.slice(prefix.length).trim().split(/ +/g);
args.shift();
       const cmd = message.content.trim().split(/ +/g)[0].slice(prefix.length).toLowerCase();

       if(cmd == 'eval') {
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
const admins = ['908563963392958464', '630070645874622494']

if(admins.includes(message.author.id)) {


		const embed1 = new MessageEmbed().setTitle('Evaluating...');
		const msg = await message.channel.send({ embeds: [embed1] });
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
			await msg.edit({ embeds: [embed], components: [buttonRow] });
const collector = msg.createMessageComponentCollector({ componentType: 'BUTTON', time: 15000 });

collector.on('collect', async(i) => {
	if (i.user.id === message.author.id) {

		if(i.customId.startsWith('evalDone')) {
await msg.edit({ embeds: [embed], components: [] });
i.reply({ content: `Okay!`, ephemeral: true });
}
                if(i.customId.startsWith('evalDelete')) {
 await i.reply({ content: `Deleted!`, ephemeral: true });
await msg.delete();
return;
}
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', async(collected) => {
        if(collected.length <= 0) await msg.edit({ embeds: [embed] });
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


       }

     }
}
}
