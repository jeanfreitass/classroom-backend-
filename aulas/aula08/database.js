// importar mongo db
const {MongoClient} = require('mongodb')

//string de conexão
const url = "mongodb+srv://@cluster0.5fft98i.mongodb.net/"

//cliente
const client = new MongoClient(url)
async function conectar(){
    try{
        await client.connect()
        console.log("Conected")
        return client.db("agenda")
    } catch(e){
        console.log("Error to conect",e.message);
    }
}

module.exports = conectar