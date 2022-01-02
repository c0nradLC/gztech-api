# gztech-api
Back-end para a aplicação GZTech

## Requerimentos
* docker(versão utilizada: 20.10.7)
* docker-compose(versão utilizada: 1.25.0)

## Como utilizar e instalar
Para executar o container da API, utilizaremos docker-compose, caso o usuário logado não faça parte do grupo do docker, será necessário executar o comando com `sudo` antes de `docker-compose`
~~~
docker-compose up
~~~
Caso tudo tenha ocorrido como esperado, uma das últimas linhas que aparecerá no terminal será mais ou menos assim 
`server        | Server running`

Após o container estar ativo e funcionando, podemos acessar a API pela URL: `http://localhost:3333/`, onde teremos na tela: `{"message":"Server running!"}`, também poderemos cadastrar, editar, remover e listar os níveis e desenvolvedores pelo front-end

Caso deseje visualizar o banco de dados, é possível acessar o phpMyAdmin pela URL: `http://localhost:8090` selecionando o banco de dados `gztech`
