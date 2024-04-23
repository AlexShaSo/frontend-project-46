const { Command } = require('commander');

const program = new Command();

program
  .version('1.0.0')
  .description('Моя программа')

program.helpOption('-h');

program.parse();