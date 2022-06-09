import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: "Information",

    slash:true,
    testOnly: true,

    callback: ({ message }) => {
        new Embed()
            .setTitle(Infomation)
            .addField('1️⃣  Go to https://musx.io/ 
            2️⃣  Sign with Discord
            3️⃣  Sign in with Last.FM (Go to spotify scrobbling in last.fm settings and link your Spotify Account ✅) 
            4️⃣  Use command !points to check your points, or go to https://musx.io/ (Type it in 🤖︱bot-commands or 💭︱general)
            5️⃣  Use !rewards to see the available rewards. 
            6️⃣  Use !claim (number) for the reward you wish to receive.  Example: !claim 1')
            .setColor(0xff0000),.reply
    },
} as ICommand