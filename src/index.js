const RegisterRouter = require("./routes/register.routes");
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/api/v1/", RegisterRouter);

app.get("/", (req, res) => {
  res.send("Hello, World");
});

module.exports = app;
