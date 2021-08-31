const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const DIR = process.argv[3];

request(URL, (error,response, body) => {
  fs.writeFile(DIR,body,() => error ? console.log(response && response.statusCode) : console.log(`Downloaded and saved ${body.length} bytes to ${DIR}`));
});

