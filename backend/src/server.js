const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

mongoose.connect(
  "mongodb+srv://davillo:davillo@omnistack9-76pdr.mongodb.net/semana09?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//req.query  = acessar query params
//req.params acessar route params
// req.body acessar corpo da request

app.use(express.json());
app.use(routes);
app.listen(3000);
