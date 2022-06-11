import { ICommand } from 'wokcommands'

export default {
  callback: ({ instance }) => {
    instance.commandHandler.commands.forEach((command: any) => {
      console.log(command)
    })
  },
} as ICommand