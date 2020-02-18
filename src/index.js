const path = require("path");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const publicDirectoryPath = path.join(__dirname, "../client", "build");
const history = require("connect-history-api-fallback");

require("./db/mongoose");

app.use(express.json());
app.use(history());
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log("Server is starting at port " + port);
});
