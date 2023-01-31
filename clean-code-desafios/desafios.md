## Índice
[Nome de variáveis](#id1)<br>
[Booleanos](#id2)<br>
[Causa vs Efeito](#id03)<br>
[Código em inglês](#id04)<br> 
[Regras em condicionais](#id05)<br> 
[Parâmetros e desestruturação](#id06)<br> 
[Números mágicos](#id07)<br> 
<!-- 
[Comentários vs Documentação](#id08)<br> 
[Syntactic Sugars](#id09)<br>  
-->

<br>

<div id="id1"></div>

### ⚔️ [Nome de variáveis](desafios/01-nomenclatura-de-variaveis.ts) 

O código consiste em uma função que recebe um nome de usuário do Github e retorna o mesmo usuário com uma categoria.

As categorias serão atribuídas ao usuário de acordo com o número de seus seguidores no Github, onde caso o número de seguidores seja maior ou igual ao número mínimo que cada categoria necessita, será retornada a categoria que possuir o maior mínimo de seguidores possível.

As categorias serão as seguintes:

- **User**: Preciso no mínimo 5 seguidores para receber essa categoria
- **Friendly**: Preciso no mínimo 50 seguidores para receber essa categoria
- **Famous**: Preciso no mínimo 500 seguidores para receber essa categoria
- **Super Star**: Preciso no mínimo 1000 seguidores para receber essa categoria

O objetivo nesse código não é corrigir ou implementar o seu funcionamento, pois ele já funciona, é renomear variáveis ou até atributos de objetos de acordo com o que foi aprendido, dando sentindo às variáveis de acordo com as regras acima.

<br>

<div id="id2"></div>

### ⚔️ [Booleanos](desafios/01-nomenclatura-de-variaveis.ts)

O código contém uma lógica que representa uma ida do Diego à um parque de diversões, o Rocket Park, para andar no seu brinquedo preferido.

Para entrar no parque, existem algumas regras:
- Você precisa ter um bilhete
- O parque está aberto entre as 9h e 18h
- Já para andar em seu brinquedo preferido, o Diego precisa apenas ser maior que 130cm de altura.

O objetivo nesse código não é corrigir ou implementar o seu funcionamento, pois ele já funciona, é renomear variáveis ou até atributos de objetos de acordo com o que foi aprendido, dando sentindo às variáveis de acordo com as regras acima.

<br>

<div id="id3"></div>

### ⚔️ [Causa vs Efeito](desafios/03-causa-vs-efeito.tsx)

O código contém uma lógica de um componente React que faz uma chamada para uma função que retorna os dados do usuário.

Enquanto os dados do usuário não são retornados, é exibido em tela o comportamento de `Loading` para que a tela não fique em branco.

O objetivo nesse código não é corrigir ou implementar o seu funcionamento, pois ele já funciona, é renomear variáveis ou até atributos de objetos de acordo com o que foi aprendido, dando sentindo às variáveis de acordo com as regras acima.

<!-- Não consegui trocar nenhuma variável -->

<br>

<div id="id4"></div>

### ⚔️ [Código em inglês](desafios/04-codigo-em-ingles.tsx) 

O código contém uma lógica de um componente React que faz um filtro em uma lista de produtos para exibir em tela somente os produtos que o usuário buscar quando digitar no input.

O objetivo nesse código não é corrigir ou implementar o seu funcionamento, pois ele já funciona, é renomear variáveis ou até atributos de objetos de acordo com o que foi aprendido, dando sentindo às variáveis de acordo com as regras acima.

<br>

<div id="id5"></div>

### ⚔️ [Regras em condicionais](desafios/05-regras-em-condicionais.ts) 
O código contém uma função que verifica se um aluno irá ou não ser aprovado ao final do ano escolar.

Para ser aprovado, existem duas regras:

- Sua nota deve ser maior que 7
- Suas faltas devem ser menores que 100

O objetivo é reorganizar o código de forma a aplicar o que foi aprendido sobre regras em condicionais.

<br>

<div id="id6"></div>

### ⚔️ [Parâmetros e desestruturação](desafios/06-parametros-e-desestruturacao.tsx) 
O código contém funções que lidam com a atualização dos dados de um usuário a partir de uma rota que receberá os seguintes dados:

```js
body: { name, email, password }
params: { id }
```

O objetivo nesse código é aplicar os conceitos aprendidos na aula dando mais clareza ao código sobre o que os parâmetros `body`, `params` e `data` recebem.

<br>

<div id="id7"></div>

### ⚔️ [Números mágicos](desafios/07-numeros-magicos.js) 
O código contém funções que lidam com checagem de atualizações de uma aplicação e cálculo de desconto, onde:

- O tempo de checagem de uma atualização por meio do `setInterval` é feita a cada 30 minutos.
- Os cálculos do desconto devem ter o preço em centavos e o desconto em porcentagem

O objetivo é aplicar os conceitos aprendidos na aula dando mais clareza ao código sobre a que esses números mágicos se referem.

<br>

<div id="id8"></div>

<!-- 
### ⚔️ [Comentários vs Documentação](desafios/08-comentarios-vs-documentacao.js) 
O código contém uma função responsável pelo registro do usuário no banco de dados. Porém, antes de cadastrar o usuário no banco é preciso realizar alguns passos:

- Validações
- Conversão do avatar para JPG.

O objetivo é aplicar os conceitos aprendidos na aula, removendo o máximo de comentários possível. Lembrando que é válido reescrever um trecho de código para deixá-lo mais claro, dispensando assim a necessidade do comentário.
-->

<br>

<div id="id9"></div>

<!-- 
### ⚔️ [Syntactic Sugars](desafios/09-syntatic-sugars.ts) 
O código possui um objetivo: pegar os primeiros 5 valores de um array de avaliações de um app, somá-los e retornar o resultado e horário atual. Para isso, temos duas funções:

- **sumFirstFiveRatings**: essa função deve retornar um objeto com o somatório das 5 primeiras avaliações e o horário atual em timestamp (caso tenha dúvidas sobre esse formato, é a quantidade de segundos que se passaram desde 1 de janeiro de 1970). Porém, caso avaliações seja `falsy` ou não possua pelo menos 5 valores, deve retornar os respectivos erros.
- **getFirstFiveRatings**: essa função deve retornar os primeiros 5 valores do array de avaliações caso o seu tamanho seja no mínimo 5. Se essa condição não for atendida, deve retornar `false`.

O objetivo nesse código é aplicar os conceitos aprendidos na aula, removendo o máximo de `syntatic sugars` possíveis do código. Lembrando que nem sempre um código mais curto é melhor.
-->

<br>

