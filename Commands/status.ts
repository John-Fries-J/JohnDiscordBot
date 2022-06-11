import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sets bot status',
    permissions: ['ADMINISTRATOR'],

    minArgs: 1,
    expectedArgs: '<status>',
    ownerOnly: true,

    slash: 'both',

    callback:  ({ client, text }) => {
        client.user?.setPresence({
            status: 'dnd',
            activities: [
                {
                    name: text
                }
            ]
        })
    },
} as ICommand