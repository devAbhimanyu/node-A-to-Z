const http = require("http");
const reqListener = require("./routes");

const server = http.createServer(reqListener);

server.listen(4000);
