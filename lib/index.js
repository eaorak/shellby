#!/usr/bin/env node
"use strict";
var chalk = require('chalk');
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk.red(figlet.textSync('cli-bot', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("CLI to unite them all")
    .option('-a, --add <event-name>', 'Add event')
    .option('-d, --delete', 'Delete event')
    .option('-l, --list', 'List events')
    .parse(process.argv);
console.log('process.argv: ', process.argv);
var options = program.opts();
console.log('options: ', options);
console.log('Event name: ', options.eventName);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
