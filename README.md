# Component library published on NPM

[Click here to read the English version of this Readme](#credits)

Este projeto disponibiliza componentes já estilizados e com algumas funcionalidades, que podem ser utilizados por outras aplicações React. É uma biblioteca de componentes que [está publicada no NPM](https://www.npmjs.com/package/zingarelli-alurabooks-ds). O projeto foi desenvolvido em React/TypeScript, aplica estilos com styled-components, e utiliza o Storybook para facilitar a visualização dos componentes disponíveis. 

| :placard: Vitrine.Dev |     |
| -------------  | --- |
| :sparkles: Nome        | **Biblioteca de componentes Alura Books**
| :label: Tecnologias | React, TypeScript, styled-components, TSDX, Storybook
| :rocket: URL         | https://www.npmjs.com/package/zingarelli-alurabooks-ds
| :fire: Curso     | https://cursos.alura.com.br/course/react-desenvolvendo-biblioteca-componentes


![](https://github.com/zingarelli/event-tracker/assets/19349339/612a6951-8044-4b81-9c48-4dfe4de37fc6#vitrinedev)

## Créditos

Este projeto foi desenvolvido no curso [React: desenvolvendo uma biblioteca de componentes](https://cursos.alura.com.br/course/react-desenvolvendo-biblioteca-componentes) oferecido pela [Alura](https://www.alura.com.br).

Instrutor: **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**.

## Detalhes do projeto

A biblioteca publicada no NPM pode ser acessada neste link: https://www.npmjs.com/package/zingarelli-alurabooks-ds

O catálogo de componentes no Storybook pode ser acessado neste link: https://component-library-alura-books.vercel.app/

A biblioteca contém diversos componentes que possuem estilos e estão prontos para receber funcionalidades adicionais por meio de props, como `onClick` e `onChange`. 

Todos os componentens iniciam com o prefixo `Ab`, de Alura Books, que é a inspiração para criação desta biblioteca, e estão mais voltados para aplicações que lidam com e-commerce.

Os componentes estão disponíveis em um [Storybook](https://storybook.js.org), ferramenta que funciona como uma vitrine, em que é possível visualizar cada componente de modo isolado, podendo alterar valores de suas props para ver como se comportam.

A imagem abaixo mostra a tela do Storybook. No menu lateral são listados os componentes disponíveis e ao lado é exibido o componente renderizado e várias opções para modificá-lo. As props são exibidas abaixo do componente e é possível alterá-las. As alterações são aplicadas dinamicamente ao componente.

![screenshot do Storybook Rodando](https://github.com/zingarelli/event-tracker/assets/19349339/1697617b-8e5f-4028-bdf9-f1ab403f86d3)

### Componentes disponíveis

Segue abaixo a lista de componentes disponíveis. Lembrando que você pode visualizá-los e testá-los online [neste link](https://component-library-alura-books.vercel.app/).

- `<AbButton />`: renderiza um botão e disponibiliza dois estilos diferentes de visualização;

- `<AbCard />`: renderiza um quadro genérico, em que é possível incluir outros elementos como `children`. Pode ser utilizado, por exemplo, para exibir um produto.

- `<AbOptionsGroup />`: pensando no contexto de e-commerce de livros, este componente renderiza três opções de compra (e-book, livro impresso, impresso + e-book). Um estilo diferente é aplicado à opção clicada;

- `<AbQuantityInput />`: é um controle de quantidade, com dois botões para aumentar ou diminuir a quantidade de um produto.

- `<AbTag />`: renderiza um quadro genérico, em que é possível adicionar um texto ou outros elementos como `children`. No contexto de um e-commerce, este componente pode servir como forma de agrupar produtos de uma mesma categoria (tag);

- `<AbTextInput />`: input de texto com uma label, em que é possível passar via props o texto para a label e o placeholder, bem como escolher o tipo do input (`text`, `passoword`, `email` e `date`).

- `<AbModal /`>: um modal que recebe um título, um booleano para controlar se o modal está aberto ou fechado, e uma função onClose. Você pode adicionar conteúdo ao modal passando-o como `children`.

## O que eu aprendi

### TSDX

Para facilitar a automatização e publicação da biblioteca no NPM, podemos utilizar o **CLI [TSDX](https://tsdx.io)**. Basta rodar o comando abaixo para fazer o bootstrap de um projeto com a estrutura básica necessária.

    npx tsdx create nome_da_sua_lib

Durante a instalação, você pode selecionar um template para o projeto, sendo que uma das opções inclui o Storybook.

### Publicando no NPM

O processo de publicação é bem simples, e a maior parte das configurações foi feita pelo TSDX. Primeiro, é necessário [criar uma conta no NPM](https://www.npmjs.com/signup).

Com a conta criada, abra um terminal, navegue até a pasta do projeto e faça login no NPM

    npm login

Para publicar, rode o comando a seguir:

    npm publish --access=public

Pronto! O pacote estará disponível no NPM e você poderá acessá-lo/gerenciá-lo no seu perfil no NPM. 

- o nome do pacote será de acordo com o que está no `package.json` de seu projeto (propriedade `name`); caso o pacote não seja criado devido a conflito de nome (pacote que já existe com esse nome no NPM), basta alterar essa propriedade no `packgage.json` para algum nome diferente.

Para utilizar o pacote publicado, é o comando de sempre:

    npm i nome_do_seu_pacote.

### Publicando novas versões

O comando é o mesmo: `npm publish --access=public`. No entanto, é necessário que você **altere a versão do seu pacote** no `package.json`, na propriedade `version`.

A numeração de versão pode seguir a convenção chamada ["versionamento semântico"](https://semver.org/lang/pt-BR/) (major.minor.patch).

### Automatizando a integração GitHub x NPM

Existe um pacote chamado `auto`, que possibilita automatizar a publicação de novas versões da biblioteca de componentes no NPM, a partir de push de arquivos no GitHub, por meio da configuração de uma Action no GitHub.

Instalação: 

    npm install auto

Script a ser adicionado no `package.json`, que será chamado pela Action do GitHub, para o `auto` publicar o conteúdo da branch main:

    "release": "auto shipit --base-branch=main"

A integração com o GitHub é por meio de uma GitHub Action, configurada com um arquivo com a extensão `.yaml`. O arquivo criado, `push.yaml`, está [disponível no diretório `.github\workflows`](https://github.com/zingarelli/alura-books-ds/blob/main/.github/workflows/push.yaml).

Neste arquivo, é necessário passar o GITHUB_TOKEN e o NPM_TOKEN. O GITHUB_TOKEN será acessado diretamente pelo GitHub quando este arquivo estiver no repositório. Já o NPM_TOKEN precisa ser criado, seguindo dois passos:

- Gerar o token no site do NPM:

    - clicar no avatar -> "Access Tokens", botão "Generate New Token" -> "Classic Token";

    - dar um nome para o token;

    - selecionar o tipo "Publish".
    
- Salvar esse token no repositório no GitHub 

    - aba "Settings", menu "Secrets and variables" -> "Actions", botão "New repository secret".

A publicação automática envolve alterar o package.json para incrementar a versão da biblioteca. Por isso, é necessário também dar permissão para o que o GITHUB_TOKEN possa escrever no repositório:

- Aba "Settings", menu "Actions -> General";

- Em "Workflow permissions", selecione "Read and write permissions".

### React Storybook

O projeto foi feito na versão 6.5 do Storybook. [Documentação da versão 6.5](https://storybook.js.org/docs/6.5/react/get-started/install/).

O React Storybook é uma ferramenta que auxilia na criação de um catálogo de componentes. Ele provê uma interface visual em que é possível visualizar e testar os componentes de modo isolado, sem interferência de outros componentes. Como forma de documentação, é possível também visualizar quais props o componente possui e até modificar seus valores, verificando dinamicamente as alterações no componente. Na tela, também há opções para ver o código, alterar a viewport (para ver como fica em mobile e tablet), etc.

Os componentes são adicionados ao Storybook por meio de um arquivo com a extensão `.stories.tsx`, que podem ser vistos na pasta `stories`. Neste arquivo é possível informar como o componente deve ser exibido no Storybook, podendo passar diferentes props (por convenção é chamado de `args`) e dados mockados para renderizar o componente de modos diferentes. A essa configuração é dado o nome de *"story"*.

Para subir o Storybook, tendo feita a instalação com o TSDX e selecionado o template react-with-storybook, basta entrar na pasta do projeto criado e rodar o seguinte comando:

    npm run storybook

O Storybook irá rodar no endereço: http://localhost:6006/ 

## Instalação e execução 

Este projeto foi criado com o TSDX (versão 0.14.1), Node.js (versão v16.15.1) e npm (versão 8.11.0).

Após baixar/clonar o projeto, abra um terminal, navegue até a pasta do projeto e rode o seguinte comando

    npm install

**Atenção:** este projeto está com uma GitHub Action configurada para automaticamente publicar uma nova versão da biblioteca no NPM a cada `push` para o GitHub. Caso você faça modificações no projeto e faça um `push`, pode ser que você receba e-mails com erros de publicação. Veja a seção [Automatizando a integração GitHub x NPM](#automatizando-a-integração-github-x-npm) para entender como isso é feito.

---

## Credits

This README has been translated into English with the help of [ChatGPT](https://www.openai.com/). Thank you for the translation assistance, Chat!

This project was developed in a course from [Alura](https://www.alura.com.br) called "React: creating a component library" ([React: desenvolvendo uma biblioteca de componentes](https://cursos.alura.com.br/course/react-desenvolvendo-biblioteca-componentes), in Portuguese).

Instructor: **[Vinicios Neves](https://www.linkedin.com/in/vinny-neves/)**.

## Project details

This project provides React components that can be used by other React applications. It is a component library that [is published on NPM](https://www.npmjs.com/package/zingarelli-alurabooks-ds). The project was developed using React/TypeScript, applies styles with styled-components, and uses Storybook to facilitate the visualization of the available components.

The **library published on NPM** can be accessed at this [link](https://www.npmjs.com/package/zingarelli-alurabooks-ds).

The **component catalog in Storybook** can be accessed at this [link](https://component-library-alura-books.vercel.app/).

The library contains various components that come with styles and are ready to receive additional functionalities through props, such as `onClick` and `onChange`.

All the components start with the prefix `Ab`, which stands for Alura Books, the inspiration for creating this library, and they are more suitable for applications related to e-commerce.

The components are available in a [Storybook](https://storybook.js.org), which works as a showcase where you can view each component in isolation and modify their prop values to see how they behave.

The image below shows the Storybook screen. The left sidebar lists the available components, and the rendered component with various options to modify it is displayed next to it. The props are shown below the component, and you can modify their values. The changes are applied dynamically to the component.

![Screenshot of Storybook running locally](https://github.com/zingarelli/event-tracker/assets/19349339/1697617b-8e5f-4028-bdf9-f1ab403f86d3)

### Available Components

Here is the list of available components (their content is rendered in Portuguese). Remember that you can view and test them online [at this link](https://component-library-alura-books.vercel.app/).

- `<AbButton />`: Renders a button and provides two different visual styles.

- `<AbCard />`: Renders a generic card where you can include other elements as its `children`. It can be used, for example, to display a product.

- `<AbOptionsGroup />`: Considering the context of a book e-commerce, this component renders three purchase options (e-book, printed book, printed book + e-book). A different style is applied to the selected option, during the `onclick` event.

- `<AbQuantityInput />`: It is a quantity controller with two buttons to increase or decrease the quantity of a product.

- `<AbTag />`: Renders a generic tag where you can add text or other elements as `children`. In the context of an e-commerce website, this component can be used to group products under the same category (tag).

- `<AbTextInput />`: A text input with a label where you can pass the texts to the label and placeholder via props, as well as choose the input type (`text`, `password`, `email`, and `date`).

- `<AbModal /`>: A modal that receives a title string, a boolean to open/close the modal and a onClose function. You can add content to the modal by passing other elements as `children`.

## Installation

This project was bootstrapped with TSDX (version 0.14.1), using Node.js (version v16.15.1) and npm (version 8.11.0). You need Node.js and npm installed in order to run this project.

After cloning or downloading this project, open a terminal, navigate to the project's folder and run the following command in order to install all necessary dependencies:

    npm install

After that, you can run the Storybook app with the following command:

    npm run storybook

Storybook will show the available components at http://localhost:6006/.

**Attention:** This project has a GitHub Action configured to automatically publish a new version of the library on NPM with every `push` to GitHub. If you make modifications to the project and push them, you may receive emails with publishing errors.
