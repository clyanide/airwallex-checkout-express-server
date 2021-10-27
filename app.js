const express = require("express");
app = express();

require("dotenv").config();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

const routes = require("./routes");
app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on Port: ${PORT}`);
});
