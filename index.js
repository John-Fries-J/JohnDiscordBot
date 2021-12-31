"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = __importStar(require("discord.js"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.default.Client({
    intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_INVITES,
        discord_js_1.Intents.FLAGS.GUILD_MEMBERS
    ]
});
client.on('ready', () => {
    console.log('The bot is online');
});
client.on('messageCreate', (message) => {
    if (message.content === '!bot') {
        message.reply({
            content: 'This bot is developed by John Fries'
        });
    }
});
client.on('messageCreate', (message) => {
    if (message.content === '!twitch') {
        message.reply({
            content: 'Archie\'s twitch is https://www.twitch.tv/archiehedges123. You should drop a follow!'
        });
    }
});
client.on('messageCreate', (message) => {
    if (message.content === '!john') {
        message.reply({
            content: 'The bot genius.'
        });
    }
});
client.login(process.env.TOKEN);
