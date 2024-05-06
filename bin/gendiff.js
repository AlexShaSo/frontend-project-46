#!/usr/bin/env node
import { Command } from 'commander';
import genDiff from '../src/index.js';
import parseFile from '../src/parse.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format <type>', 'output format', 'stylish')
  .arguments('<filepath1> <filepath2>')
  .action((file1, file2) => {
    console.log(genDiff(file1, file2));
  });

export default program.parse(parseFile);
