// importar mongo db
const {MongoClient} = require('mongodb')

//carregar o dotenv
require("dotenv").config()

//string de conexão
const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PSSWD}@${process.env.MONGO_DB_HOST}/`

// DB e cliente
let db = null
const client = new MongoClient(url)

//função para criar o banco de dados
async function conectar(){
    try{
        if(db==null){
            db = await client.connect
            db = client.db("agenda")
        }
        console.log("Banco conectado")
        return db
    }catch(e){
        console.log("Banco conectado")
    }
}

module.exports = conectar