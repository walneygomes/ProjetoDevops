const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')

//conexao com minha base de dados
//nome gameloja
// Database
mongoose.Promise = global.Promise
mongoose.connect(process.env.PORTA,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Teste
//server.get('/', (req, res, next) => rest.send('Backend'))

// Middlewares
server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(cors())
//criação da minha entidade
//produto
const Produto = restful.model('Produto', {
    //declaração das minhas variaveis
    //nome 
    //preco
    name: { type: String, required: true },
    preco:  { type: Number, required: false },
    descricao: { type: String, required: true },
    url: { type: String, required: true }


})
// Rest API
Produto.methods(['get', 'post', 'put', 'delete'])

// Rest API
Produto.updateOptions({ new: true, runValidators: true})

// Routes
//produtos
Produto.register(server, '/produtos')

// Start Server
//minha porta que rodara
//node.js(backend)
server.listen(process.env.PORTA)
//saida no terminal
//
console.log("conectado")