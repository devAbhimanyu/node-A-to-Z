const http = require("http");
const fs = require("fs");
function reqListener(req, res) {
  //console.log(req.url, req.method, req.headers);
  //   process.exit();
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Conten-Type", "text/html");
    res.write("<html>");
    res.write(
      '<form action="/message" method="POST"><input type="text" name="ipVal"/> <button type="submit">Send</button></form>'
    );
    res.write("<html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    console.log("message api");
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      //   console.log(parsedBody);
      const inputVal = parsedBody.split("=")[1];
      fs.writeFileSync("inputVal.txt", inputVal);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Conten-Type", "text/html");
  res.write("<html>");
  res.write("<h1> reply </h1>");
  res.write("<html>");
  res.end();
}

const server = http.createServer(reqListener);

server.listen(4000);
