#!/usr/bin/env node

// https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89

const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const path = require('path');
const program = require('commander');
const { runInAuth, listEvents } = require('./calendar')

clear();
console.log(
  chalk.red(
    figlet.textSync('cli-bot', { horizontalLayout: 'full' })
  )
);

program
  .version('0.0.1')
  .description("Google calendar cli")
  .option('-a, --add <event-name>', 'Add event')
  .option('-d, --delete', 'Delete event')
  .option('-l, --list', 'List events')
  .parse(process.argv)

const options = program.opts()

if (!process.argv.slice(2).length) {
  program.outputHelp()
}

if (options.list) {
  runInAuth(listEvents)
}
