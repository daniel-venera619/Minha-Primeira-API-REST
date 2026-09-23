const e = require("express");
const express = require("express");
const app = express();
const PORT = 3033;

const produtosRoute = require("./routes/produtosRouts");
const clientesRoute = require("./routes/clientesRoutes");
app.use(express.json());
app.use(produtosRoute);
app.use(clientesRoute);



app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
});

