import DiscordJS, { Client, Intents, Interaction, Options } from 'discord.js'
import dotenv from 'dotenv'
import WOKCommands from 'wokcommands'
import path from 'path'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS],
})

    client.on('ready', () => {
        console.log('The bot is online')

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
            description: 'Replies with information about giveaways we host.', // need to add user: to mention a user.
            options: [
                {
                    name: 'user',
                    description: 'User that gets mentioned',
                    required: false,
                    type: DiscordJS.Constants.ApplicationCommandOptionTypes.USER
                }
            ]
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

    client.on('interactionCreate', async (interaction) => {
        if (!interaction.isCommand()) {
            return
        }

        const { commandName, user } = interaction
console.log(interaction)
        if (commandName === 'info') {
            // John: this get user broke it lmao, Trying to ping the user here.
// Nish: nah, it should work fine now :))

            interaction.reply({ 
                content: `${user}\n:one:  Go to https://musx.io/ \n:two:  Sign with Discord \n:three:  Sign in with Last.FM (Go to spotify scrobbling in lastfm settings and link your Spotify Account :white_check_mark:)  \n:four:  Use command !points to check your points, or go to https://musx.io/ (Type it in :robot:︱bot-commands or :thought_balloon:︱general) \n:five:  Use !rewards to see the available rewards. \n:six:  Use !claim (number) for the reward you wish to receive.  Example: !claim 1`,
                ephemeral: false,
            })
        }

        if (commandName === 'commands') {
            interaction.reply({ 
                content: '__**!bot**__ - Sends message about the bot developer \n__**!rules**__ - Directs users to the rules channel \n__**!info**__ - Sends info on how to participate in the giveaways \n __**/info**__ - Replies with information about giveaways we host.',
                ephemeral: false,

            })
        }
    })

    client.login(process.env.TOKEN)
