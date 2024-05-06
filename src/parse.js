const parse = (file, ext) => {
  if (ext === '.json') {
    return JSON.parse(file);
  }
  return console.log('Wrong filepath\n Check your file');
};

export default parse;
