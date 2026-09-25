const clientes = require("../models/clientesModel");

const buscarClientes = (req, res) =>{
    res.json(clientes)
}

const buscarClientePorId = (req, res) =>{
    const id = req.params.id;
    const cliente = clientes.find(cliente => cliente.id == id);

        if(!cliente){
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            })
        }
        res.json(cliente)

}

const criarCliente = (req, res) =>{
    const novoCliente = {
        id: clientes.length + 1,
        nome: req.body.nome,
        email: req.body.email,
        telefone: req.body.telefone,
    }

    clientes.push(novoCliente);
    res.status(201).json(novoCliente);


}

const editarCliente = (req, res) =>{
    const id = req.params.id;
    const cliente = clientes.find(cliente => cliente.id == id);

    if (!cliente){
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }
    cliente.nome = req.body.nome; 
    cliente.email = req.body.email; 
    cliente.telefone = req.body.telefone; 

    res.json(cliente);

}

const excluirCliente = (req, res) =>{
 const id = req.params.id;
    const indici = clientes.findIndex(cliente => cliente.id == id);

    if (indici === -1){
        return res.status(404).json({
            mensagem: "Cliente não encontrado"
        });
    }

    const removerCliente = clientes.splice(indici, 1);

    res.json({
        mensagem: "Cliente Removido com sucefu"
        
    });

}

module.exports = {
    buscarClientes,
    buscarClientePorId,
    criarCliente,
    editarCliente,
    excluirCliente,
   
}