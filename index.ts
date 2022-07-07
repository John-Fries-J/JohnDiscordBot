import DiscordJS, { Client, Intents, Interaction, Options, Collection } from 'discord.js'
import dotenv from 'dotenv'
import path from 'path'
dotenv.config()
const colors = require('colors')

import fs from 'fs';
import chalk from 'chalk';
import WOKCommands from 'wokcommands';

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
         } catch (error: any) {
    		  console.log('There was a typo or error in ' + chalk.red(file) + '.js :-\n' + chalk.hex('#fc9803')(error.stack) + '\n')
        }
	}
}

    client.on('ready', () => {
        const guildId = '657622961146298388'
        const guild = client.guilds.cache.get(guildId)
        let commands

        if (guild) {
            commands = guild.commands
        } else {
            commands = client.application?.commands
        }

        commands?.create({
            name:'info',
            description: 'to be made',
        })
        commands?.create({
            name:'commands',
            description: 'Replies with all commands.'
        })
    })

    client.on('messageCreate', (message) => {
      
        if (message.content === '!bot') {
            message.reply({
                content: 'This bot is developed by John Fries if you need any assistance please dm John on discord'
            })
        }
    })
    client.on('messageCreate', (message) => {
        if (message.content === '!rules') {
            message.reply({
                content: 'Head over to <#667395056570728459>'
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
                content: 'To be made'
            })
        }
    })
    client.on('messageCreate', (message) => {
    if (message.content.toLowerCase().includes('<@266413473154465793>') && !message.author.bot) {
    message.reply({
    content: `Hey ${message.author.username},Please don't ping them`
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
