const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ Hello: "myWorld" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT);
console.log("app is listening on Port 5000");
