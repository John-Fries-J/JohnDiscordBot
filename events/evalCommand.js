const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')

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
const check2 = message.content.includes('proccess.env')
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
    if(admins.includes(message.author.id)) console.log('⚠️ WARNING! Owner Did Not Used The Eval Now! WARNING! ⚠️')
		try {
console.log(args)
			const data = eval(args.join(' ').replace(/```/g, ''));
			const embed = new MessageEmbed()
				.setTitle('Eval Command')
				.setDescription(await data);
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
		if(i.customId.includes('evalDone')) await msg.edit({ embeds: [embed] });
                if(i.customId.includes('evalDelete')) await msg.delete();
	} else {
		i.reply({ content: `These buttons aren't for you!`, ephemeral: true });
	}
});

collector.on('end', async(collected) => {
        await msg.edit({ embeds: [embed] });
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
