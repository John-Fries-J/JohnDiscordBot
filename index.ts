import DiscordJS, { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
  ]
})

    client.on('ready', () => {
        console.log('The bot is online')

        new WOKCommands(client, {
            commandsDir: path.join(__dirname, 'commands'),
            typeScript: true,
            testServers: ['949475866201694258'],
        })
    })

    client.on('messageCreate', (message) => {
        if (message.content === '!bot , !support') {
            message.reply({
                content: 'This bot is developed by John Fries if you need any assistance please create a ticket or dm John on discord'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!Rules') {
            message.reply({
                content: 'Head over to <#949476143759777842>'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!john') {
            message.reply({
                content: 'The bot genius, The cool guy and The man who runs the show around here.'
            })
        }
    })

    client.login(process.env.TOKEN)