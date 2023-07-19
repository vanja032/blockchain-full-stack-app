const http = require("http");
const app = require("./app");
require("dotenv").config();

const port = process.env.PORT || 3000;
const host = process.env.HOST || "localhost";

const server = http.createServer(app);
server.listen(port, host);

console.log(`Server started {${host}:${port}} ...`);