
# Projeto Modulo 2 - back-end
## API - Rest

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

Bibliotecas utilizadas : express , date-fns

![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

## ⚙️ Passo a passo.

✅Para testar você precisa ter o Insomnia instalado.
Primeiro passo e fazer o fork ou clonar esse repositória para o seu github.


✅no Insomnia crie um requisição chamada "criar conta", utilizando o verbo POST com o seguinte URL http://localhost:3000/contas?senha_banco=Cubos123Bank.
 coloque no corpo da requisição as seguites informaçõe. (selecione o formato JSON).<br>
 <code>{<br>
 "nome": "Foo Bar", <br>
 "cpf": "00011122233",<br>
 "data_nascimento": "2021-03-15",<br>
 "telefone": "71999998888",<br>
 "email":"foo@bar.com",<br>
 "senha": "12345"<br>
}<br></code>
Pronto, assim terá uma conta criada, altere o valor dos campos CPF, email para criar outra conta.

✅utilizando o verbo PUT, crie uma nova requisição e chame de "atualizar dados" e coloque a seguinte url http://localhost:3000/contas/1/usuario.
Repare que essa requisição serve para atualizar os dados da conta numero "1"(a primeira que foi criada).
Utilizando o mesmo formato do corpo da requisição anterios (criar conta), atualize os dados que achar necessario.
lemrando que todos os campos devem estar no corpo da requisição e preenchidos.

✅Proximo passo e criar uma requisição que exclui uma conta, para isso , utilize o verbo "DELETE", chame de "deletar conta" e coloque o URL http://localhost:3000/contas/1 , atenção que para exluir essa conta o saldo precisa ser zerado, e o numero da conta a ser exluída , nesse caso  "1", está contido na URL, caso queira excluir outra conta, altere na URL.

✅Nessa proxima requisição utilizaremos o verbo "GET", para listar todas as contas desse banco, para isso na URL digite, http://localhost:3000/contas?senha_banco=Cubos123Bank.

✅Nos proximos passos, faremos algumas transações, a primeira delas será depositar, então crie uma requisição com esse nome, utilizando o verbo "POST" e com o a URL http://localhost:3000/transacoes/depositar, nesse o corpo deve conter as seguintes informações (selecionar JSON):<br>
<code>{<br>
	"numero_conta": "1",<br>
	"valor": 1900<br>
}</code><br>

✅Para essa requisição de "sacar", crie com o verbo "POST" nomeie adequadamente ,e na URL : http://localhost:3000/transacoes/sacar, e no corpo, sempre utulizando JSON, coloque os dados:<br>

<code>{<br>
	"numero_conta": "1",<br>
	"valor": 300,<br>
    "senha": "12345"<br>
}</code><br>

✅

✅

 

