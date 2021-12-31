import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: "Replies with Archies Twitch",

    slash:true,
    testOnly: true,

    callback: ({ message }) => {
        message.reply('Archies twitch is https://www.twitch.tv/archiehedges123. You should drop a follow!')
    },
} as ICommand