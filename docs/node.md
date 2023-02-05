<h1 align="center">
  <img src="../.github/node.png" alt="Código limpo no Node.js">
</h1><br>

<div id="id00"></div>

## Índice
[Clean code no back-end](#id01)  
[Princípios de SOLID](#id02)  
<!-- 
[Exemplo prático de SOLID](#id03)  
[Princípios de DDD](#id04)  
[Exemplo prático de DDD](#id05)  
[Unindo DDD ao SOLID](#id06)   -->
<br>

<div id="id01"></div>

## 📌 Clean code no back-end
- Código limpo não é dependente de arquitetura.
- Uma boa forma de saber se o código está mais limpo é dar atenção aos testes automatizados.
- Se consegue escrever testes de maneira mais simples, alterar código sem quebrar muito a switch de testes.
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id02"></div>

## 📌 Princípios de SOLID
<br>

> **S** — **Single Responsiblity Principle** (*Princípio da responsabilidade única*)  
**O** — **Open-Closed Principle** (*Princípio Aberto-Fechado*)  
**L** — **Liskov Substitution Principle** (*Princípio da substituição de Liskov*)  
**I** — **Interface Segregation Principle** (*Princípio da Segregação da Interface*)  
**D** — **Dependency Inversion Principle** (*Princípio da inversão da dependência*)
<h1></h1>

**📎 SRP** - cada classe/entidade/serviço da aplicação deve ser responsável por uma única ação. Para verificar é só verificar o que o método faz. Se houver um conector, o método está ferindo o princípio.

**📎 OCP** - as entidades da aplicação devem estar abertas para extensão e nunca para modificação. Esse princípio é ferido quando o métodos tem condicionais que terão que adicionar mais condicionais no futuro.

**📎 LSP** - deve ser possível a substituição de uma dependência de uma classe por outra, desde que elas tenham o mesmo formato. Por exemplo, alteração de banco de dados.

**📎 ISP** - que as interfaces sejam separadas
```ts
❌
interface PrinterInterface {
  print: () => void
  scan: () => void
}

class Printer implements PrinterInterface {}
```  
```ts
✔️
interface PrinterWithScan {
  scan: () => void
}

interface BasicPrinter {
  print: () => void
}

class Printer implements BasicPrinter, PrinterWithScan {
  print: () => void;
  scan: () => void;
}

class Printer2 implements BasicPrinter {
  print: () => void;
}
```

**📎 DIP** - a forma de lidar com as dependências de uma classe deve ser inversa ao modelo tradicional.
```ts
❌
import {createUserOnDatabase} from "db"

function createUser() {
  createUserOnDatabase()
}
```
```ts
✔️
// arquivo 1

function createUser(
  createUserOnDatabase: () => void
) {
 createUserOnDatabase()
}

---

// arquivo 2

import {createUserOnDatabase} from "db"

createUser(createUserOnDatabase)
```
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>
<!--

<div id="id03"></div>

## 📌 Exemplo prático de SOLID
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id04"></div>

## 📌 Princípios de DDD
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id05"></div>

## 📌 Exemplo prático de DDD
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id06"></div>

## 📌 Unindo DDD ao SOLID
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>
-->