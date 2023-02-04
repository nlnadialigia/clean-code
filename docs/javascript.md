<h1 align="center">
  <img src="../.github/javascript.png" alt="Código limpo no Javascript">
</h1>

## Índice
[Nome de variáveis](#id2)  
[Booleanos](#id3)  
[Causa vs Efeito](#id04)   
[Código em inglês](#id05)   
[Regras em condicionais](#id06)   
[Parâmetros e desestruturação](#id07)   
[Números mágicos](#id08)   
[Comentários vs Documentação](#id09)   
[Syntactic Sugars](#id10)   

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

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id1)
<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

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

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id2)

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

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

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id3)

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id05"></div>

## 📌 Código em inglês
- Código que não está em inglês não é um código acessível.
- Os leitores de tela não conseguem ler dois idiomas ao mesmo tempo, ou seja, os desenvolvedores com deficiências visuais não conseguiram utilizar o código que está em português, visto que as linguagens de programação são em inglês.

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id4)

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id06"></div>

## 📌 Regras em condicionais
**📎 Negação dentro de ifs**
  - evite sempre que possível as negações.
  - tente transcrever o código para que a variável possa ler lida do contrário
    ```js
    ❌ 
    const isUserOlderThan18Years = true
    const isUserLivesOnBrazil = true

    if (!isUserOlderThan18Years && !isUserLivesOnBrazil) {}

    ✔️
    const isUserYoungerThan18Years = true
    const doesUserLivesOutsideBrazil = true

    if (isUserYoungerThan18Years && doesUserLivesOutsideBrazil) {}
    ```
**📎 Early return vs else**
  - a substituição do `else` por `early return` é válida na maioria das situações
    ```js
    ❌ function isUserOlderThan18Years(user) {
          if (!user) {
            return {error: true}
          } else {
            return user.age >= 18
          }
        }

    ✔️ function isUserOlderThan18Years(user) {
          if (!user) {
            return {error: true}
          } 

          return user.age >= 18
        }
    ```

  - a utilização do `else` é mais apropriada quando no `if` não for fácil a identificação do momento em que o `return` será utilizado.

**📎 Evite condicionais aninhadas**
- prefira unificar as condições e, no caso de não ser possível, utilizar vários `ifs`.

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id5)

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id07"></div>

## 📌 Parâmetros e desestruturação
- sempre que possível, receber e enviar parâmetros nomeados
  ```js
  /*
  Rota de para criação do usuário (nome, email, password)
  Controller (nome, email, password)
  Repositório (nome, email, password)
  */

  ❌
  function createUserRoute(body) {
    // validações

    createUserController(body)
  }

  function createUserController(data) {
    usersRepository.create(data)
  }

  const usersRepository = {
    create(data)
    // cria o usuário (nome, email, password)
  }

  ✔️
  function createUserController(data) {
    const {name, email, password} = data
    usersRepository.create({
      name,
      email,
      password
    })
  }
  ```
- prefira receber nas funções objeto ao invés de múltiplos parâmetros
  ```js
  ❌
  function createUserRoute(body, params) {
    const {name, email, password} = body

    // validações

    createUserController({
      name,
      email,
      password
    })
  }

  // Chamada com todos as variáveis
  createUserRoute({name, email, password}, {id: 1})

  // Chamada somente com o params
  createUserRoute(null, {id: 1})

  ✔️
  function createUserRoute({body, params}) {
    const {name, email, password} = body

    // validações

    createUserController({
      body: {name, email, password},
      params: {id: 1}
    })
  }

  createUserRoute({
    params: {id: 1}
  })  
  ```
- muitas vezes faz sentido a resposta da sua função ser um objeto
  ```js
  ❌
  const usersRepository = {
    create(data) {
      const user = createUserOnDatabase()

      return user
    }
  }

  ✔️
  const usersRepository = {
    create(data) {
      const user = createUserOnDatabase()

      return {
        user
      }
    }
  }
  ```

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id6)  

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id08"></div>

## 📌 Números mágicos
- cálculos que não são fáceis de serem entendidos por uma pessoa que nunca deu manutenção no código ou não sabe o contexto.
- comum em comparação de datas, na criação de intervalos.
  ```js
  // setTimeout, setInterval

  ❌ setTimeout(() => {}, 2592000000);

  ✔️ 
  setTimeout(() => {}, 1000 * 60 * 60 * 24 * 30) // 30 days

  const interval_30_days = 1000 * 60 * 60 * 24 * 30
  setTimeout(() => {}, interval_30_days);
  ```
- uma boa prática é colocar nas variáveis qual a unidade em que a mesma está
  ```js
  ❌
  function calculateDiscount(price, discountAmount) {
    //retorna desconto
  }

  ✔️
  function calculateDiscount(priceInCents, discountAmountInPercent) {
    //retorna desconto
  }
  ```

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id7)

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id09"></div>

## 📌 Comentários vs Documentação
- Comentário serve como um aviso para outro desenvolvedor para explicar o porquê o código foi realizado dessa forma, seja por uma regra de negócio específica, alguma limitação de biblioteca, por algum erro, ou sinalizar um padrão diferente.
- Documentação não é legal ter dentro do comentário.
  ```js
  /**
   * Esse código foi escrito assim porque a biblioteca X ainda não suporta Y
   * 
   * https://github.com/author/X/issues/123456
   */

  // código
  ```

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id8)

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id10"></div>

## 📌 Syntactic Sugars
- Coisas específicas de uma linguagem. Evitar até o ponto que não atrapalhe a produtividade.
- Utilize comandos que fazem sentido e geralmente são utilizados em várias linguagens de programação.
  ```js
  const numberInString = "12373"

  ❌ const number = +numberInString
  ❌ const number = parseInt(numberInString)

  ✔️ const number = Number(numberInString)

  ❌ const isNumberNotNull = !!number
  ✔️ const isNumberNotNull = Boolean(number)

  ❌ const numberAsString = `${number}`
  ✔️ const numberAsString = String(number)
  ```

#### ⚔️ [Desafio](../clean-code-desafios/desafios.md#id9)

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)
