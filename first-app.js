const fs = require("fs");
console.log("Hello world");

fs.writeFileSync("hello.txt", "the content is coming from node");
