import DiscordJS, { Client, Intents } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
  ]
})

    client.on('ready', () => {
        console.log('The bot is online')

        new WOKCommands(client, {
            commandsDir: path.join(__dirname, 'commands'),
            typeScript: true,
            testServers: ['792552340845756456'],
        })
    })

    client.on('messageCreate', (message) => {
        if (message.content === '!bot') {
            message.reply({
                content: 'This bot is developed by John Fries'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!twitch') {
            message.reply({
                content: 'Archie\'s twitch is https://www.twitch.tv/archiehedges123. You should drop a follow!'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!john') {
            message.reply({
                content: 'The bot genius.'
            })
        }
    })

    client.login(process.env.TOKEN)