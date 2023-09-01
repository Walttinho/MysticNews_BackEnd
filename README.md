# Mystic-NEWS  -  API Portal News

## Descrição

O **Mystic-NEWS** é um projeto que visa oferecer uma plataforma para compartilhamento de notícias e interação entre usuários. Na plataforma, os usuários podem criar e visualizar notícias, curtir e comentar em notícias de outros usuários.

Nesta primeira etapa do projeto, foi implementada toda a estrutura "não visual" do backend. Isso inclui a conexão com o banco de dados, gerenciamento das conexões dos usuários e fornecimento dos dados para a aplicação web.

Os recursos implementados incluem:

- Acesso e busca de notícias
- Posts, likes e comentários de notícias
- Cadastro e login de usuário
- Autenticação de usuário
- Segurança e criptografia de senha
- Restrição de recursos a usuários não cadastrados
- Permissão/restrição de recursos a usuários cadastrados

A API foi desenvolvida utilizando as melhores práticas de segurança, como a criptografia de senhas e a restrição de recursos a usuários não cadastrados. Além disso, a autenticação de usuário é utilizada para controlar o acesso a determinados recursos.

Com o backend do projeto devidamente implementado, a próxima etapa consistirá no desenvolvimento do frontend, que complementará a aplicação web, permitindo aos usuários interagir com os recursos disponíveis na plataforma.
Nesta primeira etapa do projeto, foi implementada toda a estrutura "não visual" do backend. Isso inclui a conexão com o banco de dados, gerenciamento das conexões dos usuários e fornecimento dos dados para a aplicação web.

A documentação completa da API Portal News pode ser acessada através do seguinte link: [Documentação API Portal News](https://mystic-brakenews.onrender.com/doc)

## Objetivo do projeto

O objetivo principal do projeto API Portal News é praticar o desenvolvimento do backend de uma aplicação web, incluindo a documentação e o deploy do sistema.

Além disso, o projeto visa praticar o desenvolvimento de códigos para requisições do tipo GET, POST, PATCH e DELETE, consumindo dados via API. Também é uma oportunidade para praticar a criação e manipulação de bancos de dados, bem como a realização das operações básicas de CRUD (Create, Read, Update, Delete).

O projeto API Portal News utiliza as tecnologias do **MERN STACK**, que é um conjunto de tecnologias amplamente utilizado no desenvolvimento web. O MERN STACK combina o MongoDB, Express, React e Node.js para criar aplicações web modernas.

- **MongoDB**: É um banco de dados NoSQL orientado a documentos. Ele fornece flexibilidade e escalabilidade, permitindo que os dados sejam armazenados em formato de documentos JSON.
- **Express**: É um framework web para Node.js que simplifica o desenvolvimento de APIs e aplicações web. Ele fornece recursos para roteamento, gerenciamento de requisições e respostas, e muito mais.
- **React**: É uma biblioteca JavaScript para a criação de interfaces de usuário interativas. O React permite a construção de componentes reutilizáveis, tornando o desenvolvimento de interfaces mais eficiente e fácil de manter.
- **Node.js**: É um runtime JavaScript que permite a execução de código JavaScript no lado do servidor. Ele fornece uma plataforma para criar aplicações web escaláveis e de alto desempenho.

Ao combinar essas tecnologias, o **MERN STACK** oferece aos desenvolvedores uma solução completa para o desenvolvimento de aplicações web. Ele fornece uma integração perfeita entre o frontend e o backend, permitindo que os desenvolvedores criem aplicações modernas e eficientes de ponta a ponta.

## Tecnologias Utilizadas
- Node.js
- Express.js
- MongoDB
- Mongoose
- bcrypt.js
- JSON Web Tokens (JWT)
- dotenv
- cors


## Instalação
1. Clone este repositório:


`git clone https://github.com/Walttinho/MysticNews_BackEnd.git`


2. Acesse a pasta do projeto:


`cd MysticNews_BackEnd`


3. Instale as dependências:


`npm install bcryptjs cors dotenv express jsonwebtoken mongoose nodemon swagger-ui-express`


- **bcryptjs**: Biblioteca para criptografia de senhas.
- **cors**: Middleware para permitir requisições entre diferentes origens (Cross-Origin Resource Sharing).
- **dotenv**: Biblioteca para carregar variáveis de ambiente a partir de um arquivo `*.env*`.
- **express**: Framework web para Node.js.
- **jsonwebtoken**: Biblioteca para geração e verificação de tokens JWT (JSON Web Tokens).
- **mongoose**: Biblioteca para modelagem e interação com bancos de dados MongoDB.
- **nodemon**: Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **swagger-ui-express**: Middleware para gerar e visualizar a documentação da API no formato Swagger UI.

Certifique-se de estar no diretório correto do projeto antes de executar o comando. O npm irá baixar e instalar todas as dependências listadas, tornando-as disponíveis para o projeto.


4. Renomeie o arquivo `*.env.example*` para `*.env*` e preencha as variáveis de ambiente com as configurações adequadas.

5. Inicie o servidor:


`npm start`


## Uso

Para utilizar a aplicação, siga os seguintes passos:

1. Certifique-se de ter todas as dependências instaladas corretamente, executando o comando `npm install`.

2. Inicie o servidor backend executando o comando `npm start`. Isso irá iniciar o servidor na porta padrão `3001`.

3. Acesse a aplicação pelo navegador utilizando o endereço `http://localhost:3001`.

4. Na aplicação, você terá a opção de criar uma nova conta de usuário ou fazer login em uma conta existente.

5. Após criar uma conta ou fazer login, você poderá visualizar as notícias disponíveis na plataforma.

6. Interaja com as notícias através das opções de curtir e comentar. Você também pode criar suas próprias notícias.

7. Explore os recursos disponíveis na aplicação, como busca de notícias e interação com outros usuários.

Lembre-se de que a aplicação depende do servidor backend estar em execução para funcionar corretamente. Certifique-se de manter o servidor ativo enquanto estiver utilizando a aplicação.

## Rotas

Aqui está uma lista das principais rotas da API:

| Método | Rota                              | Descrição                                          |
| ------ | --------------------------------- | -------------------------------------------------- |
| POST   | `/auth/login`                     | Autenticação de usuários.                         |
| POST   | `/user/create`                    | Criar um novo usuário.                            |
| GET    | `/user`                           | Listar todos os usuários.                        |
| GET    | `/user/:id`                       | Obter informações de um usuário por ID.          |
| PATCH  | `/user/:id`                       | Atualizar informações de um usuário por ID.      |
| GET    | `/news`                           | Listar todas as notícias.                        |
| GET    | `/news/top`                       | Listar as notícias mais populares.               |
| GET    | `/news/search`                    | Buscar notícias por título.                     |
| POST   | `/news/create`                    | Criar uma nova notícia (requer autenticação).    |
| GET    | `/news/byUser`                    | Listar notícias de um usuário específico.        |
| GET    | `/news/findById/:id`              | Obter informações de uma notícia por ID.         |
| PATCH  | `/news/:id`                       | Atualizar informações de uma notícia por ID.     |
| DELETE | `/news/:id`                       | Excluir uma notícia por ID.                     |
| PATCH  | `/news/like/:id`                  | Curtir uma notícia por ID (requer autenticação). |
| PATCH  | `/news/comment/:id`               | Adicionar um comentário a uma notícia por ID.   |
| PATCH  | `/news/comment/:idNews/:idComment`| Excluir um comentário de uma notícia por IDs.  |
| GET    | `/doc`                            | Acessar a documentação da API (Swagger UI).     |

## Contribuição
Contribuições são bem-vindas! Se você quiser contribuir para este projeto, siga as etapas abaixo:
1. Faça um fork do repositório
2. Crie uma nova branch: `git checkout -b minha-branch`
3. Faça suas alterações e faça commit: `git commit -m "Minhas alterações"`
4. Faça push para o repositório remoto: `git push origin minha-branch`
5. Envie um Pull Request

## Licença
Este projeto está licenciado sob a licença nenhuma



