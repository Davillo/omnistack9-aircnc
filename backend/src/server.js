const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://davillo:davillo@omnistack9-76pdr.mongodb.net/semana09?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
//req.query  = acessar query params
//req.params acessar route params
// req.body acessar corpo da request

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));
app.use(routes);

app.listen(3000);
