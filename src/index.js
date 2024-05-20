import fs from 'fs';
import path from 'path';
import process from 'process';
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import formatter from './formatters/index.js';

const buildFullPath = (filepath) => path.resolve(process.cwd(), filepath);
const extractFormat = (filepath) => path.extname(filepath).slice(1);
const getData = (filepath) => parseFile(fs.readFileSync(filepath, 'utf-8'), extractFormat(filepath));

const genDiff = (path1, path2, format = 'stylish') => {
  const data1 = getData(buildFullPath(path1));
  const data2 = getData(buildFullPath(path2));
  const diffTree = buildDiff(data1, data2);
  return formatter(diffTree, format);
};

export default genDiff;
