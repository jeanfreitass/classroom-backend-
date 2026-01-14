const Tarefa = require("./model")


async function main() {

    let tarefa = new Tarefa("Estudar")
    await tarefa.init()

    //criar
    await tarefa.inserir()
    console.log("Tarefa criada: ", tarefa.id , tarefa.nome, tarefa.concluida)

    //buscar
    tarefa = new Tarefa("Estudar")
    await tarefa.init()
    console.log("Tarefa buscada: ", tarefa.id , tarefa.nome, tarefa.concluida)
    await tarefa.buscar()
    console.log("Tarefa enconctrada: ", tarefa.id , tarefa.nome, tarefa.concluida)

    //alterar
    tarefa.nome = "Trabalhar"
    tarefa.concluida = true
    await tarefa.alterar()
    console.log("Tarefa alterada: ", tarefa.id , tarefa.nome, tarefa.concluida)

    //deletar
    await tarefa.deletar()
    console.log("Tarefa criada: ", tarefa.id , tarefa.nome, tarefa.concluida)
}

main()