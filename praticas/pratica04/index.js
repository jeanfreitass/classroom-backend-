// importar express
const express = require("express");

//Array de teste com tarefas
const tarefas = [  
    { id: 1, nome: "Estudar middleware", concluida: false },  
    { id: 2, nome: "Praticar Express", concluida: true }  
  ];

// criar uma instância da aplicação
const app = express()
const router = express.Router()
module.exports = app

//Utilizar o middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Criando middlewares
app.use((req,res,next)=>{
    console.log("Requisição feita: ",Date())
    next()
})


//Inserindo tarefas na rota
app.use('/tarefas',router)

//retornando array tarefas no get
router.get('/',(req,res,)=>{
    res.send(tarefas)
})
//criando post em tarefas
router.post('/',(req,res,)=>{
    const tarefaNova = req.body
    res.status(201).send(tarefaNova);
})
//buscar pelo id 
router.get('/:id',(req,res,)=>{
    const { id } = req.params
    res.send(tarefas.find(x => x.id == id))
})
//criando put em tarefas
router.put('/:id',(req,res,)=>{
    const { id } = req.params
    res.status(201).send(tarefas.find(x => x.id == id));
})



//rodando na porta 3000
app.listen(3000, ()=>{
    console.log("App está On!");
});

