const mongoose = require("mongoose")
const Produto = require("../models/produtosModel")

async function criar(req, res){
    try{
        const novoProduto = await Produto.create({
            nome: req.body.nome,
            preco: req.body.preco
        })
        return res.status(201).json({
            id: novoProduto._id,
            nome: novoProduto.nome,
            preco: novoProduto.preco
        });
    } catch(err){
        if(err.errors){
           return res.status(422).json({msg:err.errors['nome'].message})

        }
        return res.status(500).json({msg:"API fora do ar"})
    }
}

async function listar(req, res){
    const Produtos = await Produto.find({})
    return res.json(Produtos);
}

async function buscar(req, res, next){
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({msg: "Parâmetro inválido"})
    }
    const produtoEncontrado = await Produto.findOne({_id:id})
    if (produtoEncontrado){
        req.Produto = {
            id: produtoEncontrado._id,
            nome: produtoEncontrado.nome,
            preco: produtoEncontrado.preco
        }   
        return next();
    }
    return res.status(404).json({msg:"Produto não encontrado"})
}

function exibir(req, res){
    return res.json(req.Produto);
}

async function atualizar(req, res){
    try{
        const {id} = req.params
        const produtoAtualizado = await Produto.findOneAndUpdate(
            {_id:id},
            {...req.body},
            {new: true, runValidators: true}
        )
        return res.json({
            id: produtoAtualizado._id,
            nome: produtoAtualizado.nome,
            preco: produtoAtualizado.preco})
    } catch(err){
        if(err.errors){
            return res.status(422).json({msg:err.errors['nome'].message,})
        }
    }    
}

async function remover(req, res){
    const {id} = req.params
    const produtoRemovido = await Produto.findOneAndDelete({_id:id})
    return res.status(204).end();
}

module.exports = {
    criar,
    listar,
    buscar,
    exibir,
    atualizar,
    remover    
};