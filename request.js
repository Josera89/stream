var request = require('request');

function printExamplHTML(callback) {

  request('http://www.example.com', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      callback(body); // Show the HTML for the Google homepage.
    }
  })
}

printExamplHTML(function(html) {
  console.log(html);
});
