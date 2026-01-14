const supertest = require("supertest")
const app = require("../app")
const request = supertest(app)

const url = '/usuarios';

let id = null

describe(" Teste de usuários /usuários", ()=>{
    test("POST /usuarios deve retornar 201", async () => {
        const response = await request.post(url).send({ "email": "usuario@email.com", "senha": "abcd1234" })
        expect(response.status).toBe(201) 
        expect(response.body.id).toBeDefined() 
        expect(response.body.email).toBe("usuario@email.com") 
        id = response.body.id;

    });
    test("POST /usuarios deve retornar 422", async ()=>{
        const response = await request.post(url).send();
        expect(response.status).toBe(422)
        expect(response.body.msg).toBe("Email e Senha são obrigatórios")
        
    });
    test("POST /usuarios/login deve retornar 200", async ()=>{
        const response = await request.post(`${url}/login`).send({ "usuario": "usuario@email.com", "senha": "abcd1234" })
        expect(response.status).toBe(200)
        expect(response.body.id).toHaveProperty("token");
        token = response.body.token
    });
    test("POST /usuarios/login deve retornar 401", async ()=>{
        const response = await request.post(`${url}/login`).send()
        expect(response.status).toBe(401)
        expect(response.body.msg).toBe("Credenciais inválidas")
        
    });
    test("POST /usuarios/renovar deve retornar 200", async ()=>{
        const response = await request.post(`${url}/renovar`).set("authorization", token)
        expect(response.status).toBe(200)
        expect(response.body.id).toHaveProperty("token");
        token = response.body.token

    });
    test("POST /usuarios/renovar deve retornar 401", async ()=>{
        const response = await request.post(`${url}/renovar`).set("authorization", "barrear", "123456789")
        expect(response.status).toBe(401)
        expect(response.body.msg).toBe("Token inválido");

    });
    test("DELETE /usuarios/${id}", async ()=>{
        const response = await request.post(`${url}/${id}`).set("authoization", token )
        expect(response.status).toBe(204)
    })
})