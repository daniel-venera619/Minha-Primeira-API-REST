const express = require("express");
const router = express.Router();
const clientesController = require("../controllers/clientesController");


router.get("/clientes", clientesController.buscarClientes);
router.get("/clientes/:id", clientesController.buscarClientePorId);
router.post("/clientes", clientesController.criarCliente);
router.put("/clientes/:id", clientesController.editarCliente);
router.delete("/clientes/:id", clientesController.excluirCliente);

module.exports = router;
