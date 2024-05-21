// import fs from 'node:fs';
import genDiff from '../src/index.js';

describe('stylish', () => {
  test('json', () => {
    expect(showDiff('./file1.json', './file2.json')).toBe(resultStylish);
  });
  test('yaml', () => {
    expect(showDiff('./file1.yaml', './file2.yaml')).toBe(resultStylish);
  });
  test('yml', () => {
    expect(showDiff('./file1.yml', './file2.yml')).toBe(resultStylish);
  });
});
