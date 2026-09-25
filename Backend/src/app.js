const express = require("express");
const app = express();

const produtosRoute = require("./routes/produtosRouts");
const clientesRoute = require("./routes/clientesRoutes");

app.use(express.json());
app.use(produtosRoute);
app.use(clientesRoute);

module.exports = app;