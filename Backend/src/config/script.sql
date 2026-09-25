DROP DATABASE IF EXISTS lojinha;

CREATE DATABASE lojinha;
USE lojinha;

CREATE TABLE produtos(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    marca VARCHAR(100) NOT NULL,
    preco DECIMAL(10,2) NOT NULL CHECK(preco > 0)
);

INSERT INTO produtos (nome, marca, preco) VALUES
('Notebock','Sansunga','4500.00'),
('Celular','Xinxh','5000.00'),
('Tela','xxx','3200.00');

CREATE TABLE clientes(
	id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    telefone VARCHAR(20) NOT NULL
);

INSERT INTO clientes (nome, email, telefone) VALUES
('Mia','mia@xxx.com','472243453453'),
('Kalifa','kalifa@xxx.com','4565465456'),
('Tila','tequila@xxx.com','46456644545');
 