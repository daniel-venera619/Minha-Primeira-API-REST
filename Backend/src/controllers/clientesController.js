const clientesModel = require("../models/clientesModel");

const buscarClientes = async (req, res) =>{
    const clientes = await clientesModel.buscarTodos();

    res.json(clientes);
};

const buscarClientePorId = async (req, res) =>{
    const id = req.params.id;
    const cliente = await clientesModel.buscarPorID(id);

        if(!cliente){
            return res.status(404).json({
                mensagem: "Cliente não encontrado"
            })
        }
        res.json(cliente);

};

const criarCliente = async (req, res) =>{
    const {nome, email, telefone} = req.body
    const criarCliente = await clientesModel.criar(nome, email, telefone);
          
    res.status(201).json(criarCliente);

};

const editarCliente = async (req, res) =>{
    const id = req.params.id;
    const {nome, email, telefone} = req.body;
    const cliente = await clientesModel.buscarPorID(id);

    if (!cliente){
        return res.status(404).json({
            mensagem: "cliente não encontrado"
        });
    }
    
    const produtoAtualizado = await clientesModel.editar(id, nome, email, telefone);
    res.json(produtoAtualizado);

};

const excluirCliente = async (req, res) =>{
  const id = req.params.id;
  const cliente = await clientesModel.buscarPorID(id);

    if (!cliente){
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    await clientesModel.excluir(id);

    res.json({
        mensagem: "Cliente Removido com sucefu"
        
    });

};


module.exports = {
    buscarClientes,
    buscarClientePorId,
    criarCliente,
    editarCliente,
    excluirCliente,
   
}