const chalk = require('chalk');
const figlet = require("figlet");


module.exports = async function(client) {
    console.log(chalk.yellow.bold(figlet.textSync("Pirt YT")));
    await console.log(chalk.red.bold(client.user.tag) + chalk.blue.bold(" Is Ready"));

}

