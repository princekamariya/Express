const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Prins",
    email: "prins@gmail.com",
    password: "4532",
  });
});

app.post("/api/v1/register", (req, res) => {
  const userName = req.body.name;
  const userEmail = req.body.email;
  const userPassword = req.body.password;
  res.json({
    success: true,
    name: userName,
    email: userEmail,
    password: userPassword,
  });
});

app.listen(port, () => {
  console.log(`Server is running of port: ${port}`);
});
