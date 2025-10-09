const conectar = require("./database")
const readline = require("readline-sync")

let db
let collection

async function insert(taskName){
    const result = await collection.insertOne(
        {
         name: taskName,
         done: false
        }
    )
}
async function find(taskName){
    const result = await collection.findOne(
        {
         name: taskName,
        }
    )
    console.log(result)
}
async function update(taskName, actualName, actualDone){
    const result = await collection.updateOne(
        {
         name: taskName,
        },
        {$set:{name:actualName,done:actualDone}}
    )
    console.log(result)
}
async function remove(taskName){
    const result = await collection.deleteOne(
        {
         name: taskName,
        }
    )
}

async function main(){
    db = await conectar()
    collection = db.collection("Tasks")
    while (true) {

        console.log("Home menu")
        console.log("1 - Create task")
        console.log("2 - Find task")
        console.log("3 - Update task")
        console.log("4 - Delete task")
        console.log("5 - Close")
        console.log("")
    
        const option = readline.question("Choose an option: ")
        switch(option){
            case "1" :  {
                const name = readline.question("Insert the task name: ")
                await insert(name)
            }  break;
            case "2" : {
                const name = readline.question("Insert the task name: ")
                await find(name)
            } break ;
            case "3" : {
                const name = readline.question("Insert the task name: ")
                const actualName = readline.question("Insert the new task name: ")
                const actualDone = readline.question("Insert the new task status: ")
                await update(name, actualName, actualDone)
            } break;
            case "4" :  {
                const name = readline.question("Insert the task name: ")
                await remove(name)
            }break;
            case "5" :process.exit(0);
            default: console.log("Opção inválida")
        }
    }
}

main()