This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requisitos

Para utilizar esta aplicação, é necessário que sua máquina tenha os seguintes programas:

- [NodeJs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/lang/en/) ou [npm](https://www.npmjs.com/get-npm)

## Como executar

- Abra o terminal no diretório raiz do projeto e digite o comando `yarn install` ou `npm install` para instalar as dependências do projeto.

- Novamente no terminal, digite o comando `yarn build` ou `npm run build` para gerar o código final da aplicação. Este processo irá gerar um diretório com o nome de `build`.

- Após isso será necessário ter o pacote `serve` instalado de forma global para gerar um servidor estático, portanto, caso não possua o pacote, digite no terminal o comando `yarn global add serve` ou `npm install serve --global`.

- Feito isso, digite no terminal o comando `serve -s build` para criar um servidor com o diretório `build`, criado anteriormente. será exibida uma mensagem no terminal com o endereço local e endereço de rede no qual a aplicação ficará disponível. Então, basta abrir o endereço fornecido (`ex: http://localhost:5000`) no browser.
