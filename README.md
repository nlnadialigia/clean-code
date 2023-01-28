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
[Booleanos](#id3)<br>
[Causa vs Efeito](#id04)<br> 
[Código em inglês](#id05)<br> 
<!-- 
[Regras em condicionais](#id06)<br> 
[Parâmetros e desestruturação](#id07)<br> 
[Números mágicos](#id08)<br> 
[Comentários vs Documentação](#id09)<br> 
[Syntactic Sugars](#id10)<br> 
-->
[Autora](#id99)

<br>

<div id="id1"></div>

## 📌 Sobre 

Repositório dos Desafios realizados no Curso de Clean Code produzido pela [Rocketseat](https://www.rocketseat.com.br/).

Clean Code está pautado em 3 pilares: legibilidade, manutenível, previsibilidade e confiança.

<br>

<div id="id2"></div>

## 📌 Nome de variáveis
- evitar diminutivos não entendíveis (u, x, y)
- nomear a função de acordo com a sua funcionalidade

  ```js
  const users = ['Diego', 'Mayk', 'Rodrigo']

  ❌ const filtered = users.filter(u => {
        return u.startsWith('D')
      })

  ✔️ const usersStartingWithLetterD = users.filter(user => {
        return user.startsWith('D')
      })
  ```
- evitar nomes genéricos (data, response, list, args, params)
  ```js
  ❌ function getUsers() => {
        const data = getUsersFromDatabase()

        // validação
        // manipulação dos dados (mapping)

        return data
      }

  ✔️ function getUsers() => {
        const users = getUsersFromDatabase()

        // validação
        // manipulação dos dados (mapping)

        return users
      }
  ```

#### ⚔️ [Desafio](clean-code-desafios/desafios.md#id1)

<br>

<div id="id3"></div>

## 📌 Booleanos
- variáveis que armazenam o estado da aplicação
- devem ser escritas em forma de pergunta

  ```js
  const isUserOnMajority = true

  // is, does, has

  ❌ const disabled = true 
  ✔️ const isDisabled = true 
  ```

- concatenando os booleanos com a nomenclatura das variáveis

  ```js
  ❌ if (loading) {}
  ✔️ if (isUserProfileLoading) {}
  ```

#### ⚔️ [Desafio](clean-code-desafios/desafios.md#id2)

<br>

<div id="id04"></div>

## 📌 Causa vs Efeito 
- as variáveis devem ser criadas pela causa e nunca pelo efeito que a variável terá no código
  ```js
  ❌ function Button() {
        const isButtonDisabled = true
        return (
          <button disabled={isButtonDisabled}>
            <span></span>
            {isButtonDisabled ? 'Carregando' : 'Enviar'}
          </button>
        )
      }

  ✔️ function Button() {
        const isFormSubmitting = true
        return (
          <button disabled={isFormSubmitting}>
            <span></span>
            {isFormSubmitting ? 'Carregando' : 'Enviar'}
          </button>
        )
      }
  ```

#### ⚔️ [Desafio](clean-code-desafios/desafios.md#id3)

<br>

<div id="id05"></div>

## 📌 Código em inglês
- Código que não está em inglês não é um código acessível.
- Os leitores de tela não conseguem ler dois idiomas ao mesmo tempo, ou seja, os desenvolvedores com deficiências visuais não conseguiram utilizar o código que está em português, visto que as linguagens de programação são em inglês.

#### ⚔️ [Desafio](clean-code-desafios/desafios.md#id4)

<br>

<div id="id06"></div>

<!-- ## 📌 Regras em condicionais -->

<br>

<div id="id07"></div>

<!-- ## 📌 Parâmetros e desestruturação -->

<br>

<div id="id08"></div>

<!-- ## 📌 Números mágicos -->

<br>

<div id="id09"></div>

<!-- ## 📌 Comentários vs Documentação -->

<br>

<div id="id10"></div>

<!-- ## 📌 Syntactic Sugars -->

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
