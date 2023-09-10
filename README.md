
# Projeto Modulo 2 - back-end
## API - Rest

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

Bibliotecas utilizadas : express , date-fns , nodemon

![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

## ⚙️ Passo a passo.

✅Para testar você precisa ter o Insomnia instalado.<br>
Primeiro passo e fazer o fork ou clonar esse repositória para o seu github.<br>
Recomendamos instalar o nodemon como dependência de desenvolvimento para falicitar a utilização.<br>
OBS. os valores utilizado sao em centavos.<br>

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

✅Para essa requisição de "sacar", crie com o verbo "POST" nomeie adequadamente ,e na URL : http://localhost:3000/transacoes/sacar, no corpo, sempre utulizando JSON, coloque os dados a seguir, para sacar 300(centavos) da conta "1", por exemplo. <br>

<code>{<br>
	"numero_conta": "1",<br>
	"valor": 300,<br>
    "senha": "12345"<br>
}</code><br>

✅A proxima transação refere-se a transferir valores entre contas existentes nesse sistema, para isso crie um requisição  utilizando o verbo "POST", chame de "transferencia" e na URL use o endereço: http://localhost:3000/transacoes/transferir, o no corpo coloque os dados a seguir:<br>

<code>{<br>
	"numero_conta_origem": "1",<br>
	"numero_conta_destino": "2",<br>
	"valor": 300,<br>
	"senha": "12345"<br>
}</code><br>

✅Vamos criar uma requisição para consultar saldo de uma conta de sua escolha, nesse caso vamos utilizar o verbo "GET", vamos chamar de "consultar saldo",  e na URL com esse endereço: http://localhost:3000/contas/saldo?numero_conta=1&senha=12345 , repare que nesse caso o que vai na URL depois de numero_conta e a conta a qual a consulta será feita, e também a senha, que precisa ser a mesma que foi utilizada na criação da conta.

✅Nessa ultima requisição que criaremos no insomnia, vamos utilizar a URL: http://localhost:3000/contas/extrato?numero_conta=1&senha=12345 , para imprimir o extrato, então vamos criar com o verbo "GET", e com nome "imprimir extrato", e assim como na requisição anterior, numero_conta e senha devem ser informados no URL, lembre-se que só é possivel imprimir um extrato de uma conta existente, e seguindo todos os passos acima, devemos obter um resultado no insonia, semelhante a esse:

<img src="\insomnia.png">



