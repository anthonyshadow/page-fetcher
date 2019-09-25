const request = require("request");
const input = process.argv.slice(2);
var fs = require('fs');
let url = input[0];
let path = input[1];

function requestPage(url, path) {
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage
    fs.writeFile(path, body, (error) => {
      if (error) {
        throw error;
      } else {
        console.log('success');
      };
    });
  });
  
  //console.log('error:', error); // Print the error if one occurred
  //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
};

requestPage(url, path);