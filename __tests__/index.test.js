import { describe, test } from '@jest/globals';
import genDiff from '../src/index.js';
import resultStylish from '../__fixtures__/stylish.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/JSON.js';

describe('stylish', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultStylish);
  });
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultStylish);
  });
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultStylish);
  });
});

describe('plain', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultPlain);
  });
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultPlain);
  });
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultPlain);
  });
});

describe('JSON', () => {
  test('json', () => {
    expect(genDiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(resultJSON);
  });
  test('yaml', () => {
    expect(genDiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(resultJSON);
  });
  test('yml', () => {
    expect(genDiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(resultJSON);
  });
});
