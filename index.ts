import DiscordJS, { Client, Intents, Interaction, Options, Collection } from 'discord.js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
const colors = require('colors')

import fs from 'fs'
import WOKCommands from 'wokcommands'

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req: any, res: any) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

client.cooldowns = new Collection();
client.commands = new Collection();

/******     Event Registration       *******/

const eventFiles = fs
	.readdirSync("./events")
	.filter((file) => file.endsWith(".js"));

// Loop through all files and execute the event when it is actually emmited.
for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(
			event.name,
			async (...args) => await event.execute(...args, client)
		);
	}
}

/*******    End     *******/

const commandFolders = fs.readdirSync("./commands");

// Loop through all files and store commands in commands collection.

for (const folder of commandFolders) {
	const commandFiles = fs
		.readdirSync(`./commands/${folder}`)
		.filter((file) => file.endsWith(".js"));
  for (const file of commandFiles) {
    		try {
          const command = require(`./commands/${folder}/${file}`)
   		client.commands.set(command.name, command);
         } catch (error) {
    		  console.log('There was a typo or error in ' + colors.brightRed(file) + '.js :-\n' + colors.brightOrange(error.stack) + '\n')
        }
	}
}

    client.on('ready', () => {
        /*new WOKCommands(client,{
            commandDir: path.join(__dirname, 'commands'),
            typeScript: true,
            testServers: ['949475866201694258'],
            botOwners: ['630070645874622494'],
        })
*/
        const guildId = '949475866201694258'
        const guild = client.guilds.cache.get(guildId)
        let commands

        if (guild) {
            commands = guild.commands
        } else {
            commands = client.application?.commands
        }

        commands?.create({
            name:'info',
            description: 'Replies with information about giveaways we host.',
        })
        commands?.create({
            name:'commands',
            description: 'Replies with all commands.'
        })
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
    // John: needs to work lmao
    // Nish: done, sir.
    client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().includes('scam') && !message.author.bot) {
    message.reply({
    content: `Hey ${message.author.username},\nIf you are referring this server as a scam, just to let you know, this is not a scam please check <#949476154312642590> or ask our regulars!`
    })
    }
    })

// Nish: I am really lazy to work on this stuff right now, just let me know which hosting you use to host the bot, i will make this someday later

    /*
client.on('messageCreate', (message) => {
        if (message.content == '!restart') {
            message.reply('Resetting...')
            .then(msg => client.destroy())
           .then(() => client.login(process.env.TOKEN))
           }})
*/
    client.login(process.env.TOKEN)
