# Estrutura do Banco de Dados <br/>

## **Aplicação para gerenciamento de serviços para um salão.** 
<br/>

> **Usúarios**: Cliente, Funcionário e Administrador.
<br/>

API para verificar se "email" e/ou "usuario" está disponivel

metódo GET

/verificaEmailOuUsuario?email=email&usuario=usuario

retorno de sucesso:

statusCode: 200

{
    existeEmailOuUsuario: false
}

retorno de error:

statusCode: 400

{
    existeEmailOuUsuario: true
}

statusCode: 500

{
    message: "Erro no servidor"
}

API para cadastrar o usuário

metódo POST

/cadastraUsuario

statusCode: 204

retorno de error:

statusCode: 500

{
    message: "Erro no servidor"
}


> **Banco de dados**: MySQL ou PostgresSQL e Redis (para a autenticação do usuário).
<br/>