var quotes = require("./quotes");
var quotes1 = require("./quotes1");
var jokes = require("./jokes");

require("dotenv").config();

const { Client, Intents } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const PREFIX = "$";

function getRandomInt(max) 
{
    return Math.floor(Math.random() * max);
}

client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in`)
});

const dateObject = new Date();
 
// current hours
const hours = dateObject.getHours();
 
// current minutes
const minutes = dateObject.getMinutes();
 
// prints time in HH:MM format
console.log(`${hours}:${minutes}`);

client.on('message', (message) =>{
    
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX))
    {
        const CMD_NAME = message.content.substring(PREFIX.length);
        console.log(CMD_NAME);
    }
    if(message.content === '$quote' || message.content === '$ quote')
    {
        if(getRandomInt(3) === 0 || getRandomInt(3) === 1)
        {
            message.channel.send(quotes[getRandomInt(quotes.length)]); // Post a quote
        }
        else
        {
            message.channel.send(quotes1[getRandomInt(quotes1.length)]);
        }
    }
    if(message.content === '$joke' || message.content === '$ joke')
    {
        message.channel.send(jokes[getRandomInt(jokes.length)]);      // Post a joke
    }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);