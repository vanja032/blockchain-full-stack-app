const express = require("express");
const router = require("./routes/api");
const logger = require("morgan");
const parser = require("body-parser");

const app = express();
app.use(logger("dev"));

app.use(parser.urlencoded({ extended: true })); // "extended = true" is for other types except strings
app.use(parser.json());


app.use("/", router);

module.exports = app;