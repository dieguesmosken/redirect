# Encurtador de URLs

Este projeto é um encurtador de URLs simples que utiliza Node.js, Express, MongoDB e um pouco de CSS para a interface do usuário. O objetivo é permitir que os usuários insiram uma URL longa e recebam uma versão encurtada que pode ser facilmente compartilhada.

## Estrutura do Projeto

```
encurtador-url
├── src
│   ├── controllers
│   │   └── urlController.js
│   ├── models
│   │   └── urlModel.js
│   ├── routes
│   │   └── urlRoutes.js
│   ├── public
│   │   ├── script.js
│   │   └── style.css
│   ├── views
│   │   └── index.html
│   └── app.js
├── package.json
├── .env
└── README.md
```

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework para construir aplicações web em Node.js.
- **MongoDB**: Banco de dados NoSQL para armazenar as URLs.
- **Mongoose**: Biblioteca para modelar dados MongoDB em Node.js.
- **CSS**: Para estilização da interface do usuário.

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   cd encurtador-url
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto e adicione a string de conexão do MongoDB:
     ```
     MONGODB_URI=<SUA_STRING_DE_CONEXÃO>
     ```

4. Inicie o servidor:
   ```
   npm start
   ```

## Uso

1. Acesse a aplicação no seu navegador em `http://localhost:3000`.
2. Insira a URL que deseja encurtar no campo de entrada.
3. Clique no botão para encurtar a URL.
4. A URL encurtada será exibida na tela, pronta para ser copiada e compartilhada.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Crie um fork do repositório, faça suas alterações e envie um pull request.

## Licença

Este projeto é de código aberto e pode ser utilizado e modificado livremente.