#Construction page web - Donate blood

Uma aplicação que recebe dados de pessoas que desejam fazer doações de sangue, esses dados serão armazenados no banco de dados postgresql

![home-page-doe](https://github.com/DebFranca/donateblood/blob/master/git/doeblood.gif)


###Ambiente de Desenvolvimento

- Visual Studio Code
- Google chrome


##Front-End

Front-End é o lado cliente da aplicação, fazendo sua comunicação com o servidor Back-End atraves do HTTP (Hypertext Transfer Protocol) e isso é feito atraves de URLs e com trocas de dados, então o Front-End é responsável por:
- Solicitar dados para o servidor
- Apresentação dos dados em tela
 
###Tecnologias Usadas

- HTML (estrutura)
- CSS (estilo)
- JavaScript (Inteligência)

####Dicas para de uso do VScode - Extensão/Plugin

- live server - para o navegador atualizar automaticamente a cada vez que salvar um novo "item". Seu start com alt+l o


####Sites de Fontes:

Simbolos:
- https://www.pontodefusao.com/simbolos/
Letras
- Google fonts ( Roboto - Regular 400 e Bold 700)


##Back-End


Back-End é o servidor, onde ficará hospedado os nossos arquivos, e vamos disponibilizar estes arquivos quando o Front-End pedir.

Eu estava usando o Live Server (plugin), porém agora vou construir o meu proprio servidor dando algumas responsabilidades própria de servidor: 
- Regras de negócio 
(só aceitar o cadastro se todos os campos estiver sido preenchido)
- Tratar os dados e colocar em um banco de dados para ficar mais seguro.
- Receber pedidos do cliente

###Tecnologias Usadas

- Node.js (JavaScript)
- PostgreSQL

Obs.: Node.Js é um Interpretador JavaScript, sem ele as funcionalidades em js não funcionam.

######building server with express 
npm é um gerenciador de pacotes para dar inicio a minha própria aplicação criando na minha pasta um package.json que será a configuração da minha aplicação. 

npm init -y 

usando o npm vou também instalar a dependência express que é um framework desenvolvido para criar servidores no node.js, que ao perceber que é uma aplicação por causa do package.json, quando instalo o express ele cria mais uma pasta a node_modules

npm install express

Então, agora essa aplicação depende do express para funcionar, logo, sem o express, não vai funcionar. No arquivo server.js está  configuração para preparar o meu servidor e alguns comentários no arquivo explanation.txt.

Vou instalar também o nodemon 

npm install nodemon

que fará a reinicialização do servidor a cada nova atualização feita na aplicação após um npm start, mas para isso preciso alterar no package.json:
DE:
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },

POR:
"scripts": {
    "start": "nodemon server.js"
  },

######configurando o servidor para receber o html e arquivos estáticos

Para isso vou usar o nunjucks, que é uma ferramenta que nos permite usar o nosso index.html e ele nos permite por no html variáveis e funcionalidades, em outras palavras o nunjucks é uma template engine e será a nossa terceira dependência. Mais comentários no arquivo explanation.txt que está na ordem de inserção de códigos.

npm install nunjucks

######Banco de Dados

- Para que os dados não fique na aplicação
- Evitar perda e evitar que os dados se corrompa
- Dar mais segurança
- Isolando dados, ou seja, dando essa responsabilidade para um banco de dados.

A linguagem que nos permite conversar com nosso banco de dados é a SQL,
Structured Query Language (Linguagem de Consulta Estruturada), lembrando que não é uma linguagem de programação, mas uma linguagem para criar as tabelas, buscar os dados nas tabelas, atualizar ou apagar.

######POSTGRES

O sistema que vou usar para trabalhar com o SQL, é Postgres, Sistema Gerenciador de Banco de Dados Relacional (SGBDR), ele é OPEN SOURCE e é gratuito

1º Passo: Instalar o Postgres:
https://www.postgresql.org/download/
Selecione sua família de sistema operacional: Windows ou Mac ..., processo simples, apenas next, next, next, coloque uma senha fácil para você não esquecer... a ultima pergunta no processo de instalação: Stack Builder... pode deixar desmarcado e dê um Finish. 

2ºPasso: Instalar o Postbird:
https://www.electronjs.org/apps/postbird que é uma ferramenta um pouco mais leve, feito em js e serve para gerenciar o postgres, após a instalação, você abre e coloca o 
username:postgres
password: "a senha que você informou na instalação do postgres"
database: deixar sem nada
start Query: tb deixa sem nada
clique em conectar

e pronto, já está no banco de dados!

3º No Postbird, clique em Select database e selecione: Create Database
Database: doeblood
clique no botão: Create Database

"conhecendo um pouco o postbird":
clique em Select database e selecione: doeblood e clique no rótulo Query, pois através das querys consigo 
- inserir dados,
- criar tabelas, 
- consegue criar 
- deletar banco de dados, 
- buscar dados
...

Agora clique no rótulo Struture e na sua esquerda na parte inferior tem um pequeno botão verde "+" 
Table name: donors
create table.

######Criando as colunas da tabela:
Add Column

Name: name
Type: Text
Botão: Add Column

Name: email
Type: Text
Botão: Add Column

Name: blood
Type: Text
Botão: Add Column

Pronto! 
obs.: na aplicação vou criar uma regra de negócio para impedir dados nulos. 

Para INSERIR dados na tabela:

1ª Opção:
no rótulo Content, bem no rodapé clique em: Add New Row
e por aqui você pode preencher os campos: name, email e blood, exemplo: Anderson Silva, anderson@gmail.com, O+

2ª Opção:
no rótulo Query:
INSERT INTO "donors" ("name", "email","blood")
VALUES ('Maria do Carmo', 'maria@gmail.com', 'A+');

voltando ao conteudo você vai ver os novos dados inseridos

Para BUSCAR dados:

SELECT * 
FROM "donors";

ou 

SELECT name 
FROM "donors";

e assim po diante...

######Conectando a aplicação ao banco de dados

1º Conectar nossa aplicação ao banco de dados:

npm install pg

obs.: o "pg" é o responsável por fazer a conexão com o banco de dados.

mais detalhes em explanation.txt


Thanks to Maik Brito - Rocketseat
