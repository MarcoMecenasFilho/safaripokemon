<img src='./images/logo.gif' width="100%">
<br>
<hr>

<h4 align="center"> 
	🚧   Safari Pokemon 🚀 Finalizado  🚧
</h4>


<br>
<h2>Sobre</h2>
<p align="justify"> Safari Pokemon é uma aplicação web FullStack, onde você pode adicionar
                    e remover Pokemon no safari e captura-los.</p 

### Features

-  Adicionar e remover pokemon no banco de dados
-  Sistema de capturar pokemon
-  Lista de Pokemon capturados fica salva no navegador

<br>
## 🛠 Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto:

- [Docker](https://www.docker.com/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
- [expressJs](https://expressjs.com/pt-br/)
- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Jest](https://jestjs.io/pt-BR/)
- [RTL](https://testing-library.com/)
- [Frisby](http://frisbyjs.com/)
- [Mocha](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [React-Router-Dom](https://www.npmjs.com/package/react-router-dom)
- [BootStrap](https://getbootstrap.com.br/)
- [Sequelize](https://sequelize.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Joi](https://joi.dev/)
- [Mysql2](https://www.npmjs.com/package/mysql2)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [ShellJs](https://www.npmjs.com/package/shelljs)


<br>
<h2>Instalar o projeto em sua máquina</h2>
<br>
<h3>Pré-requisitos</h3>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Docker](https://www.docker.com/) e [Docker-Compose](https://docs.docker.com/compose/install/).


###  Rodando a aplicação .

```bash
# Clone este repositório

# Foi utilizado SSH
$ git clone https://github.com/MarcoMecenasFilho/safaripokemon

# Acesse a pasta do projeto no seu terminal/cmd
$ cd safaripokemon

# Rode o docker-compose

$ docker-compose up

```
Abra seu navegar e coloque o endereço http://localhost:3000/

<img src='./images/start.gif' width="100%">

## Para acessar a documentação da API, basta acessar o endereço http://localhost:3001/api-docs

<img src='./images/apidoc.gif' width="100%">

<br>

### Depois de utilizar a aplicação não se esqueça de rodar o comando docker-compose down no terminal, dentro da pasta safaripokemon.

<br>

### Rodando os testes.

Antes de iniciar os testes, lembre de usar o comando docker-compose down no terminal, na raiz
do projeto. Caso tenha utilizado ele anteriormente.

#### Testes Frontend

```bash

# Acesse a pasta client a partir da raiz do projeto
$ cd client

# Instale as dependências

$ npm install

# Rode os testes

$ npm test
```

#### Testes Backend
Antes de iniciar os testes, lembre de usar o comando docker-compose down no terminal, na raiz
do projeto. Caso tenha utilizado ele anteriormente.

```bash

# Acesse a pasta server a partir da raiz do projeto
$ cd server

# Instale as dependências para poder rodar os testes unitários

$ npm install

#Rode o docker compose na pasta service para poder rodar os testes de integração

$ docker-compose up

# Abra outro terminal na mesma pasta e rode os testes

$ npm test

```

## Depois que finalizar os testes. Lembre-se de utilizar o comando docker-compose down, nas pastas que foi utilizado o up. 


 - Este projeto foi feito com muita dedicação e carinho por Marco Mecenas  [Entre em contato!](https://www.linkedin.com/in/marcomecenasfilho/).
