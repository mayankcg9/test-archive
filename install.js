// install.js

const fs = require('fs');
const archiver = require('archiver');

// Define the source directory to be zipped
const sourceDirectory = '../../src';

// Create a zip archive
const output = fs.createWriteStream(`${sourceDirectory}.zip`);
const archive = archiver('zip', { zlib: { level: 9 } });

output.on('close', () => {
  console.log(`"${sourceDirectory}.zip" has been created.`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);

// Add the contents of the source directory to the zip file
archive.directory(sourceDirectory, false);

// Finalize the zip archive
archive.finalize();

// const reverseString = (str) => str.split("").reverse().join("");
// module.exports = reverseString;


