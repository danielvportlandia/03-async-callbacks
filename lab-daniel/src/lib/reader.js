'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.readAsync = (dataPath, characterLength, callback) => {
  fs.readFile(
    dataPath,
    (error, fileBuffer) => {
      if (error) {
        throw error;
      }
      return callback(fileBuffer.toString('utf8', 0, characterLength));
    },
  );
};

//need try and catch return callback(error, null)

