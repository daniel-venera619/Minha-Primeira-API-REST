const produtos = require("../models/produtosModel");

const buscarProdutos = (req, res) =>{
    res.json(produtos)
}

const buscarProdutoPorId = (req, res) =>{
    const id = req.params.id;
    const produto = produtos.find(produto => produto.id == id);

        if(!produto){
            return res.status(404).json({
                mensagem: "Produto não encontrado"
            })
        }
        res.json(produto)

}

const criarProduto = (req, res) =>{
    const novoProduto = {
        id: produtos.length + 1,
        nome: req.body.nome,
        marca: req.body.marca,
        preco: req.body.preco,
    }

    produtos.push(novoProduto);
    res.status(201).json(novoProduto);


}

const editarProduto = (req, res) =>{
    const id = req.params.id;
    const produto = produtos.find(produto => produto.id == id);

    if (!produto){
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
    produto.nome = req.body.nome; 
    produto.marca = req.body.marca; 
    produto.preco = req.body.preco; 

    res.json(produto);

}

const excluirProduto = (req, res) =>{
 const id = req.params.id;
    const indici = produtos.findIndex(produto => produto.id == id);

    if (indici === -1){
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }

    const removerProduto = produtos.splice(indici, 1);

    res.json({
        mensagem: "Produto Removido com sucefu"
        
    });

}
module.exports = {
    buscarProdutos,
    buscarProdutoPorId,
    criarProduto,
    editarProduto,
    excluirProduto,
};