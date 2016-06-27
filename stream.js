var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

 function printExamplHTML(callback) {

  var html = "";

  http.get(requestOptions, (response) => {

    response.setEncoding("utf8");

    response.on("data", function(data) {
      html += data;

    });

    response.on("end", function() {
      callback(html)
    });

  });
}

printExamplHTML(function(html) {
  console.log(html);
});

