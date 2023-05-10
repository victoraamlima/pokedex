# Pokédex

> Status do Projeto: em desenvolvimento

>Link para o [Deploy](https://victoraamlima.github.io/Pokedex/)

>Link para o [Repositório](https://github.com/victoraamlima/Pokedex)

## Linguagens

- [HTML](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/HTML_basics)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/)
- [React](https://react.dev/)

## Tecnologias utilizadas

- React Router
- PokéAPI
- Jest
- React Testing Library
- Styled-components
- BrowserRouter 
- Context API

## Tópicos

- [Descrição do projeto](#descrição-do-projeto)

- [Pré-requisitos](#pré-requisitos)

- [Como rodar a aplicação](#como-rodar-a-aplicação)

- [Testes](#testes)

- [Tarefas em aberto](#tarefas-em-aberto)

- [Contribuindo](#contribuindo)

- [Desenvolvedor](#desenvolvedor)

## Descrição do projeto

O projeto criou uma Pokédex responsiva em React usando dados da API pokeapi.co. A aplicação foi dividida em duas páginas: Home e Detalhes do Pokémon. A Home exibiu uma lista de Pokémons com nome, imagem, ID e tipos, com opção de adicionar mais Pokémons à lista e filtrá-la por tipos selecionados pelo usuário. Ao clicar em um Pokémon da lista, o usuário era redirecionado para a página Detalhes, que exibia informações mais detalhadas como habilidades e movimentos do Pokémon selecionado.
O gerenciamento das rotas da aplicação foi feito com BrowserRouter, permitindo navegação amigável do usuário entre as páginas. Foram criados testes unitários usando Jest e React Testing Library para verificar a funcionalidade da aplicação, garantindo maior confiabilidade na aplicação como um todo.


## Pré-requisitos

### Node.js

[Node.js](https://nodejs.org/en/download/) é uma plataforma open source para desenvolvimento de aplicações em JavaScript fora do navegador, utilizado para construir aplicações de alta performance e escalabilidade em servidores web. Ele utiliza a engine JavaScript V8 e possui uma vasta biblioteca de módulos disponíveis que facilitam o desenvolvimento de aplicações modernas.

## Como rodar a aplicação

### 1. Clone o repositório para sua máquina:

```bash
git clone https://github.com/victoraamlima/pokemons.git
```
### 2. Navegue até a pasta do projeto:

```bash
cd pokedex
```

### 3. Instale as dependências:

```bash
npm install
```

## Uso

### Inicie o servidor de desenvolvimento:

```bash
npm start
```

Abra o navegador e acesse http://localhost:3000, se não funcionar verifique se não esta sendo utilizada outra porta.


## Testes
Este projeto possui testes utilizando o Jest e React Testing Library. Para executar os testes, rode o seguinte comando:

```bash
npm test
```

## Tarefas em aberto

- Implementação de mais testes

- Adicionar mais opções de filtragem

- Melhorias de desempenho 

## Contribuindo

Contribuições são sempre bem-vindas! Se você encontrar um bug ou tiver uma ideia para uma nova funcionalidade, por favor, abra uma [issue](https://github.com/victoraamlima/Pokedex/issues) neste repositório ou envie uma pull request.

## Desenvolvedor

[<img src="https://avatars.githubusercontent.com/u/62892816?v=4" width=115><br><sub>Victor Meireles</sub>](https://github.com/victoraamlima)