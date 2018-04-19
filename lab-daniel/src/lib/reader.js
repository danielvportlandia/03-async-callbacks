'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.readAsync = (paths, callback) => {
  try {
    fs.readFile(
      paths,
      (error, result) => {
        if (typeof paths !== 'string') {
          throw error;
        }
        return callback(result.toString('utf8'));
      },
    );
  } catch (error) {
    console.log(error);
  }
  return undefined;
};

