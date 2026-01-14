const supertest = require("supertest")
const app = require("../app")
const request = supertest(app)


let token = null

describe("Teste de autenticações", ()=>{
    // .1
    test("GET/produtos deve retornar 401", async ()=>{
        const response = await request.get("/produtos").send({
            nome: "Reginaldo"
        })
        expect(response.body.msg).toBe("Token invalido")
    })

    // .2
    test("GET/produtos deve retornar 401", async ()=>{
        const response = await request.get("/produtos").send({
            authorization: "123456789"
        })
        expect(response.body.msg).toBe("Token invalido")
    })

    // .3
    test("POST/users/login deve retornar 200", async ()=>{
        const response = await request.post('/users/login').send({
            username: "jean@iesb.br",
            password: "abcd1234"
        })
        expect(response.status).toBe(200)
        expect(response.body.token).toBeDefined()
        token = response.body.token
    })

    // .4
    test("GET/produtos deve retornar 200", async ()=>{
        const response = await request.get("/produtos").set("authorization",token)
        expect(response.status).toBe(200)
    })

    // .5
    test("POST/users/renovar deve retornar 200", async ()=>{
        const response = await request.post("/users/renovar").set("authorization",token)
        expect(response.status).toBe(200)
        expect(response.body.token).toBeDefined()
        token = response.body.token
    })

    // .6
    test("GET/produtos deve retornar 200", async ()=>{
        const response = await request.get("/produtos").set("authorization",token)
        expect(response.status).toBe(200)
    })
})