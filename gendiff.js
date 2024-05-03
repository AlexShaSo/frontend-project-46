import { Command } from 'commander';
const fs = require('fs');

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0', '-V, --version', 'output the version number')
  .option('-f, --format <type>', 'output format')
  .arguments('<filePath1> <filePath2>')
  .action((filePath1, filePath2) => {
    console.log(gendiff(filePath1, filePath2));
  })
program.helpOption('-h', '--help', 'helping');

program.parse();