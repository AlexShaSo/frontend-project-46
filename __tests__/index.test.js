import fs from 'node:fs';
import path from 'node:path';
import genDiff from '../src/index.js';

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

test('main func JSON', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultTree.txt');

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('main func YML', () => {
  const file1 = getFixturePath('file1.yml');
  const file2 = getFixturePath('file2.yml');
  const expected = readFile('resultTree.txt');

  expect(genDiff(file1, file2)).toEqual(expected);
});

test('Plain gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultPlain.txt');

  expect(genDiff(file1, file2, 'plain')).toEqual(expected);
});

test('JSON gendiff', () => {
  const file1 = getFixturePath('file1.json');
  const file2 = getFixturePath('file2.json');
  const expected = readFile('resultJSON.txt');

  expect(genDiff(file1, file2, 'json')).toEqual(expected);
});
