import { Collection } from "discord.js";

declare module "discord.js" {
  export interface Client {
    cooldowns: Collection<unknown, any>,
    commands: Collection<unknown, any>
  }
}
