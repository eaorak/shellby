#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var clear = require('clear');
var figlet = require('figlet');
var path = require('path');
var program = require('commander');
clear();
console.log(chalk_1.default.red(figlet.textSync('cli-bot', { horizontalLayout: 'full' })));
program
    .version('0.0.1')
    .description("Google calendar cli")
    .option('-a, --add <event-name>', 'Add event')
    .option('-d, --delete', 'Delete event')
    .option('-l, --list', 'List events')
    .parse(process.argv);
console.log('process.argv: ', process.argv);
var options = program.opts();
console.log('options: ', options);
console.log('Event name: ', options.add);
if (!process.argv.slice(2).length) {
    program.outputHelp();
}
