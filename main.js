import Login from '/login.js';

const Discord = require("discord.js");
const { default: login } = require("./login");

const client = new Discord.Client();

client.once("ready", () => {
  console.log("DiscordBotOne is Online!");
});

Login();
