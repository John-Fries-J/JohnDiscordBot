const { MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js')
const admins = ['908563963392958464', '630070645874622494']

module.exports = {
	name: "ping",
	description: 'Ping!',
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
    /*const componentRow = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId(`sample@${message.author.id}`)
					.setLabel('Click Sample')
					.setStyle('PRIMARY'),
      */
    let row2
      
if(admins.includes(message.author.id)) row2 = new MessageActionRow().addComponents(
				new MessageSelectMenu()
					.setCustomId(`restartBot@${message.author.id}`)
					.setPlaceholder('Admin Panel')
					.addOptions([
						{
							label: 'Restart',
							description: 'Restart the bot process',
							value: 'restartBot',
              emoji: {
                name: '🔧'
              }
            },
            {
							label: 'Debug',
							description: 'Start Debug Session',
							value: 'debugBotProcess',
              emoji: {
                name: '🪐'
              }
            }
						]));    		await message.channel.send('🏓Pinging...').then(async (m) => {      const gatewayLatency = Math.round(client.ws.ping);      
        const embed = new MessageEmbed()
			.setTitle('Pong!')
			.addField('API Latency', `\`${gatewayLatency}ms\``, true)
			.addField(
				'Client Latency',
				`\`${m.createdTimestamp - message.createdTimestamp}ms\``,
				true
			)
			.setColor('FFD494')
			.setImage(
				'https://cdn.discordapp.com/attachments/584291012281630742/847479947564285962/unknown.png'
			)
			.setTimestamp();
  if(row2) {
    const ms = await m.edit({ content: '**Here are the details:**', embeds: [embed], components: [row2]});
      newMessage = ms;
  } else {
    const ms = await m.edit({ content: '**Here are the details:**', embeds: [embed]});
      newMessage = ms;
  }
    })
    
return newMessage;
    
	},
};
