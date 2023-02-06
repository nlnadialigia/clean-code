<h1 align="center">
  <img src="../.github/node.png" alt="Código limpo no Node.js">
</h1><br>

<div id="id00"></div>

## Índice
[Clean code no back-end](#id01)  
[Princípios de SOLID](#id02)  
[Exemplo prático de SOLID](#id03)  
[Princípios de DDD](#id04)  
[Exemplo prático de DDD](#id05)  
[Unindo DDD ao SOLID](#id06)   
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

<div id="id03"></div>

## 📌 Exemplo prático de SOLID
- No exemplo será demonstrada a utilização dos princípios no cálculo de desconto. Existem valores diferentes de descontos para tipos diferentes de pagamentos e quantidades de parcelas.
- **SRP** -> a classe vai ser responsável somente por calcular o desconto do pedido
- **OCP** ->  No caso de precisar adicionar novas formas de pagamento, não será necessário modificar a classe de desconto, somente adicionar uma classe com o novo método de pagamento, não ferindo dessa maneiro o OCP.
- **LSP** -> podemos substituir um método sem afetar a funcionalidade. Exemplo, alterando o método de pagamento entre os diversos tipos.
- **DIP** -> quando a classe de cálculo de desconto é chamada, é quando a dependência está sendo enviada.

- [Exemplo](../node-examples/solid.ts)

<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id04"></div>

## 📌 Princípios de DDD
> **Domain-Driven Design** - boas práticas de design estratégico e design tático, apoiando todo o ciclo de desenvolvimento de software e possibilitando criar sistemas de alta complexidade.

- *Domínio* -> é o problema que se está resolvendo. É problema e o contexto. Dentro do domínio existem vários subdomínios.
- *Subdomínios* -> etapas dentro da problemática que se está tentando resolver. Diferentes áreas de entendimento, dentro do domínio maior.
  ```
    E-commerce
      - Logística
      - Faturamento
      - Pagamento
      - Estoque
  ```
- *Domain Experts* -> pessoas com conhecimento profundo sobre o domínio, que consegue identificar as identidades e casos de uso da aplicação.
- *Entidades* -> tudo aquilo que pode ser representado palpavelmente.
- *Casos de uso* -> ações que são feitas entre as entidades. Como as entidades se relacionam
- o DDD mostra que em subdomínios diferentes, em uma mesma entidade tem nomes diferentes. Exemplo: `comprador` e `destinatário`

<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id05"></div>

## 📌 Exemplo prático de DDD
- A aplicação deve ser pensada totalmente desconectada do banco de dados.
- Deveria ser possível a aplicação funcionar sem banco de dados.
- Deveria garantir, inclusive via testes automatizados, que as regras de negócio estão validades sem banco de dados.
- A aplicação deveria funcionar sem qualquer dependência externa.
- Pensando na aplicação nas entidades e casos de uso.
- A estrutura de pastas é irrelevante.
- As entidades no código não precisam refletir a estrutura do banco de dados.
- A maneira que os dados serão persistidos não deveria influenciar na maneira que o código é desenhado.

- [Exemplo](../node-examples/ddd/)
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>

<div id="id06"></div>

## 📌 Unindo DDD ao SOLID
- Será demonstrado o funcionamento da aplicação sem ter um banco de dados.
- Repository -> classe que conecta a aplicação a uma camada de persistência externa, como um banco de dados, um arquivo.

- [Exemplo](../node-examples/ddd-solid/)
<br>

[![Home](../.github/home.png)](https://github.com/nlnadialigia/clean-code)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](#id00)

<br>