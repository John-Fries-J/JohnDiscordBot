import { Client } from 'discord.js'
import { ICommand } from 'wokcommands'

const setStatus = (client: Client, status: string) => {
  client.user?.setPresence({
    status: 'online',
    activities: [
      {
        name: status,
      },
    ],
  })
}

export default {
  category: 'Configuration',
  description: 'Updates the status for the bot',
  

  minArgs: 1,
  expectedArgs: '<status>',
  

  ownerOnly: true,
  

  init: (client: Client) => {

    const status = "Testing" 
    setStatus(client, status)
  },
  

  callback: ({ client, text, message }) => {
    setStatus(client, text)

    message.reply({
      content: 'Status set!'
    })
  },
} as ICommand
