const db = require("../database");

const buscarTodos = async () => {
    const[clientes] = await db.query(
        "SELECT * FROM clientes"
    );

    return clientes;
}

const buscarPorID = async (id) => {
    const [clientes] = await db.query(
        "SELECT * FROM clientes WHERE id = ?"
        [id]
    );

    return clientes[0];
}

const criar = async (nome, email, telefone) => {
    const cliente = await db.query(
        "INSERT INTO produtos (nome, email, telefone VALUES (?,?,?)"
        [nome, email, telefone]
    );

    return{
        id: cliente.insertID,
        nome,
        email,
        telefone
    };
}

const editar = async (id, nome, email, telefone) =>{
    await db.query(
        "UPDATE produtos SET  nome=?, email=?, telefone=? WHERE id=?",
        [nome, marca, preco, id]
    );

    return{
        id,
        nome,
        email,
        telefone
    };
}

const excluir = async (id) => {
    const [resultado] = await db.query(
        "DELETE FROM clientes WHERE id=?",
        [id]
    );
    
    return resultado.affectedRows;
}

module.exports = {
    buscarTodos,
    buscarPorID,
    criar,
    editar,
    excluir
};