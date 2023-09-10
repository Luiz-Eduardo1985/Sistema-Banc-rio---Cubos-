const express = require('express')
const { banco } = require('./bancodedados')

const app = express()

const { senha } = require('./controladores/intermediarios')
const { listarContas, criarConta, atualizarDados, excluirConta, depositar, sacar, transferir, saldo, extrato } = require('./controladores/controladores')

app.use(express.json());


app.put("/contas/:numeroConta/usuario", atualizarDados);
app.delete('/contas/:numeroConta', excluirConta);
app.post('/transacoes/depositar', depositar);
app.post('/transacoes/sacar', sacar);
app.post('/transacoes/transferir', transferir);
app.get('/contas/saldo', saldo);
app.get('/contas/extrato', extrato);

app.use(senha);

app.get('/contas', listarContas);
app.post('/contas', criarConta);





app.listen(3000, () => {
    console.log("servidor rodando na porta http://localhost:3000 ");
})