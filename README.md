<p align="center">
  <img src=".github/logo.png" width=400 alt="Clean Code">
</p>

<h1 align="center">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/nlnadialigia/clean-code?color=FF6E31&style=plastic">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/nlnadialigia/clean-code?color=FF6E31&style=plastic">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/nlnadialigia/clean-code?color=FF6E31">
  <a href="LICENSE">
  <img alt="GitHub" src="https://img.shields.io/github/license/nlnadialigia/clean-code?color=FF6E31&logoColor=FF6E31&style=plastic">
  </a>
</h1>
<br>

# Índice
[Sobre](#id1)<br>
[Nome de variáveis](#id2)<br>
<!-- 
[](#id3)<br>
[](#id98)<br> 
-->
[Autora](#id99)

<br>

<div id="id1"></div>

## 📌 Sobre 

Repositório dos Desafios realizados no Curso de Clean ode produzido pela [Rocketseat](https://www.rocketseat.com.br/).

Clean Code está pautado em 3 pilares: legibilidade, manutenível, previsibilidade e confiança.

<br>

<div id="id2"></div>

## 📌 Nome de variáveis
- evitar diminutivos não entendíveis (u, x, y)
- nomear a função de acordo com a sua funcionalidade

  ```js
  const users = ['Diego', 'Mayk', 'Rodrigo']

  /* ERRADO */
  const filtered = users.filter(u => {
    return u.startsWith('D')
  })

  /* CORRETO */
  const usersStartingWithLetterD = users.filter(u => {
    return u.startsWith('D')
  })
  ```
- evitar nomes genéricos (data, response, list, args, params)
  ```js
  /* ERRADO */
  function getUsers() => {
    const data = getUsersFromDatabase()

    // validação
    // manipulação dos dados (mapping)

    return data
  }

  /* CORRETO */
  function getUsers() => {
    const users = getUsersFromDatabase()

    // validação
    // manipulação dos dados (mapping)

    return users
  }
  ```

### ⚔️ [Desafio](clean-code-desafios/desafios.md)


<br>

<div id="id3"></div>

<!-- ## 📌  -->

<br>

<div id="id98"></div>

<!-- ## 📌  -->

<br>

<div id="id99"></div>

## 👩‍💼 Autora
<img src=".github/picture.png" width="100px;" alt="Picture"/>
<p><b>Nádia Ligia, budding back-end developer.</b></p>
<a href="https://www.linkedin.com/in/nlnadialigia/">
  <img alt="Linkedin" src="https://img.shields.io/badge/-Linkedin -FF6E31?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nlnadialigia/" />
</a>&nbsp;
<a href="mailto:nlnadialigia@gmail.com">
  <img alt="Email" src="https://img.shields.io/badge/-Email-FF6E31?style=flat&logo=Gmail&logoColor=white&link=mailto:nlnadialigia@gmail.com" />
</a>&nbsp;
<a href="https://www.nlnadialigia.com">
  <img alt="Homepage" src="https://img.shields.io/badge/-Homepage-FF6E31" />
</a>
