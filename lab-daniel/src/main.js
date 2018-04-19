'use strict';

const fileReader = require('./lib/reader');

const baconPath = `${__dirname}/data/bacon.txt`;
const hodorPath = `${__dirname}/data/hodor.txt`;
const bobRossPath = `${__dirname}/data/bob-ross.txt`;

const printCharacters = (file) => {
  console.log(file);
  console.log('_______________________________________________________________________________________________________');
};

const data = [bobRossPath, baconPath, hodorPath];

const readDataArrayAsync = (dataArray, currentIndex, callback) => {
  if (currentIndex >= dataArray.length) {
    return callback();
  }
  const currentFilePath = dataArray[currentIndex];
  return fileReader.readAsync(currentFilePath, (file) => {
    printCharacters(file);
    readDataArrayAsync(dataArray, currentIndex + 1, callback);
  });
};

readDataArrayAsync(data, 0, () => {
  console.log('We have read all the files!');
});
