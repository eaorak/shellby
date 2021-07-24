#!/usr/bin/env node

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');

clear();
console.log(
  chalk.red(
    figlet.textSync('cli-bot', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description("CLI to unite them all")
  .option('-a, --add <event-name>', 'Add event')
  .option('-d, --delete', 'Delete event')
  .option('-l, --list', 'List events')
  .parse(process.argv)

console.log('process.argv: ', process.argv)

const options = program.opts()
console.log('options: ', options)
console.log('Event name: ', options.add)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
