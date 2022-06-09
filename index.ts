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

    })

    client.on('messageCreate', (message) => {
        if (message.content === '!bot') {
            message.reply({
                content: 'This bot is developed by John Fries if you need any assistance please create a ticket or dm John on discord'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!rules') {
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
    client.on('messageCreate', (message) => {
        if (message.content === '!info') {
            message.reply({
                content: ':one:  Go to https://musx.io/ \n:two:  Sign with Discord \n:three:  Sign in with Last.FM (Go to spotify scrobbling in lastfm settings and link your Spotify Account :white_check_mark:)  \n:four:  Use command !points to check your points, or go to https://musx.io/ (Type it in :robot:︱bot-commands or :thought_balloon:︱general) \n:five:  Use !rewards to see the available rewards. \n:six:  Use !claim (number) for the reward you wish to receive.  Example: !claim 1'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content == 'scam') {
            message.reply({
                content: 'This is not a scam please check <#949476154312642590> or ask our regulars!'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content == 'Scam') {
            message.reply({
                content: 'This is not a scam please check <#949476154312642590> or ask our regulars!'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content == 'This is scam') {
            message.reply({
                content: 'This is not a scam please check <#949476154312642590> or ask our regulars!'
            })
        }
    })
    client.login(process.env.TOKEN)