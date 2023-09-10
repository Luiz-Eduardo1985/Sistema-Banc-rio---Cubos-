
# Projeto Modulo 2 - back-end
## API - Rest

![](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

Bibliotecas utilizadas : express , date-fns

![](https://img.shields.io/badge/Express%20js-000000?style=for-the-badge&logo=express&logoColor=white)

## ⚙️ Passo a passo.

✅Para testar você precisa ter o Insomnia instalado.

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

✅utilizando o verbo PUT, uma nova requisição chame de "atualizar dados" e coloque a seguinte url http://localhost:3000/contas/1/usuario.
Repare que essa requisição serve para atualizar os dados da conta numero "1"(a primeira que foi criada).
Utilizando o mesmo formato do corpo da requisição anterios (criar conta), atualize os dados que achar necessario.
lemrando que todos os campos devem estar no corpo da requisição e preenchidos.

✅Proximo passo e criar uma requisição que exclui um conta, para isso , utilize o verbo "DELETE", chame de deletar conta e coloque o URL http://localhost:3000/contas/1 , atenção que para exluir essa conta o saldo precisa ser zerado, e o numero da conta a ser exluida , nesse caso e "1", caso queira excluir outra conta , mudo no URL.

✅



 

