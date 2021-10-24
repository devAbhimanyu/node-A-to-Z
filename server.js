const http = require("http");

function reqListener(req, res) {
  console.log(req.url, req.method, req.headers);
  //   process.exit();
  res.setHeader("Conten-Type", "text/html");
  res.write("<html>");
  res.write("<h1> reply </h1>");
  res.write("<html>");
  res.end();
}

const server = http.createServer(reqListener);

server.listen(4000);
