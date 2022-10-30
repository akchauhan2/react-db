const http = require("http");
const dummy = require("./dummy");

// Create an instance of the http server to handle HTTP requests
let app = http.createServer((req, res) => {
  // Set a response type of plain text for the response
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Send back a json response and end the connection
  res.end(JSON.stringify(dummy));
  res.end();
});

// Start the server on port 9000
app.listen(9000, "127.0.0.1");
console.log("Node server running on port 9000");
