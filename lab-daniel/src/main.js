'use strict';

const fileReader = require('./lib/reader');

const baconPath = `${__dirname}/data/bacon.txt`;
const hodorPath = `${__dirname}/data/hodor.txt`;
const bobRossPath = `${__dirname}/data/bob-ross.txt`;

// const file1 = process.argv[2] = baconPath;

const printCharacters = (characterLength) => {
  console.log(characterLength);
  console.log('___________________________________________________');
};

const characterMax = 255;

const data = [bobRossPath, baconPath, hodorPath];

const readDataArrayAsync = (dataArray, currentIndex, callback) => {
  if (currentIndex >= dataArray.length) {
    return callback();
  }
  const currentFilePath = dataArray[currentIndex];
  try {
    return fileReader.readAsync(currentFilePath, characterMax, (file) => {
      printCharacters(file);
      readDataArrayAsync(dataArray, currentIndex + 1, callback);
    });
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

readDataArrayAsync(data, 0, () => {
  console.log('We have read all the files!');
});
