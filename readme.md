# Desafio TodoList - Frontend - Backend


## Contexto
 
 Esse repositório foi criado como treino de TypeScript, tanto em desenvolvimento Frontend quanto em desenvolvimento Backend,

## Instalação

1. Clone o repositório

- `git clone git@github.com:Lucaslopes1995/todoList.git`
- Entre na pasta do repositório que você acabou de clonar:
  - `cd todolist`

2. Instale as dependências do back

- `cd todo-back`
- `npm install`

3. Configure os dados do banco de dados

- `renomeio o arquivo ".ENV_EXAMPLE" como .env e adicione no arquivo os dados do seu banco de dados Mysql`

3. Inicialize o servidor

- `npm start`

4. Instale as dependências do frontend

- Abra outro terminal e a partir da pasta que você clonou (todo), realize os seguintes comandos:
- Entre na pasta frontend
  - `cd todo-front`
  - `npm install`

5. Abra o projeto no navegador

- `npm start`

## Observações e usabilidade

  - O banco de dados utilizado foi o Mysql, para realizar a iniciação do dataBase e da tabela, basta adicionar a Query abaixo:
  - 
   -CREATE DATABASE IF NOT EXISTS task_api;

USE task_api;

CREATE TABLE IF NOT EXISTS  tasks
(
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(30) NOT NULL,
	done Boolean NOT NULL,
	PRIMARY KEY(id)
);

INSERT INTO tasks (name, done)
VALUES ('Ir na Padaria', true),
	('Cortar Cabelo', false),
	('Estudar', false);
