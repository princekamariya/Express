const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.post("/api/v1/register", (req, res) => {
  res.send(`<h1>Hello ${req.body.name} and your email is ${req.body.email}`);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Server is running of port: ${port}`);
});
