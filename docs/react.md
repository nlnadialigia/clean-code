<h1 align="center">
  <img src="../.github/react.png" alt="Código limpo no React">
</h1>

## Índice
[Desacoplando componentes](#id01)  
[Componentes puros](#id02)  
[Funções e eventos no React](#id03)  
[Composição vs Customização](#id04)  
[Condicionais no render](#id05)  
<br>

<div id="id01"></div>

### 📌 Desacoplando componentes
O projeto react são projetos que carregam várias camadas, o que pode deixar o código confusão e dificultar a manutenção.

**Quando se separa os componentes em componentes menos?**
- Quando se tem algo repetitivo
- Quando se consiga isolar algo do contexto, sem prejudicar o comportamento original

**Apontamentos**
- Nem tudo que se repete precisa ser obrigatoriamente ser separado em componentes.
- Quando existe uma variável ou função que é utilizada somente em uma parte específica do código, é indício que essa parte pode ser isolada em um componente.
- Sempre que quisermos verificar se o componente precisa ser desacoplado a análise ideal é através da camada de javascript e não do conteúdo dentro do `return`.  
<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id02"></div>

### 📌 Componentes puros
- Funções puras são função que não dependem de informações externas. 
- Dependem somente dos parâmetros enviados para ela e com esses parâmetros ela consegue ser executada e devolver uma resposta.
- No desacoplamento é importante separar somente a lógica que mantém o componente puro.
- Para sabermos se o componente é puro basta mover o componente de um lugar para outro da aplicação e o mesmo deverá continuar funcionando, pois o mesmo não depende de um contexto ou de uma lógica acoplada a outro componente.
  
<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id03"></div>

### 📌 Funções e eventos no React
- sempre que for criar uma função dentro do componente e essa função é disparada através de um evento do usuário, como um `click` ou `submit`, prefixar a função com com `handle`. Assim fica fácil a diferenciação entre as funções.
- quando um componente precisa receber uma função disparada através de um evento do usuário, prefixar com `on`.
- O padrão utilizado não é o mais importante. O importante é manter um padrão quando se trabalha em projetos com componentes em React.
  
<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)

<br>

<div id="id04"></div>

### 📌 Composição vs Customização
- no pattern de composição ao invés da utilização de propriedade para configurar o componente, cria-se outros componentes.

**Exemplo:**

  *Customização*
  - [Input](../react-app/src/example/Input.tsx)
  - [App](../react-app/src/example/App.tsx)
  
  *Composição*
  - [Input](../react-app/src/components/Input.tsx)
  - [Input](../react-app/src/App.tsx)

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)
<br>

<div id="id05"></div>

### 📌 Condicionais no render
- evite colocar as condicionais na camada de renderização.
- deixar a camada de html com o mínimo de dependência de operações javascript.

**Exemplo**

*Mostrar uma mensagem se não tiver to dos a serem exibidos em tela*

[❌ No html](../react-app/src/example/App.tsx)

[✔️ Fora do html](../react-app/src/App.tsx)

<br>

[![Home](../.github/home.png)](../README.md)&nbsp;&nbsp;&nbsp;
[![Início](../.github/arrow.png)](./react.md)
