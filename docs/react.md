<h1 align="center">
  <img src="../.github/react.png" alt="Código limpo no React">
</h1>

## Índice
[Desacoplando componentes](id#1)<br>
[Componentes puros](id#2)<br>
<!-- 
[Funções e eventos no React](id#3)<br>
[Composição vs Customização](id#4)<br>
[Condicionais no render](id#5)<br>
 -->
<br>

<div id="id1"></div>

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

<div id="id2"></div>

### 📌 Componentes puros
- Funções puras são função que não dependem de informações externas. 
- Dependem somente dos parâmetros enviados para ela e com esses parâmetros ela consegue ser executada e devolver uma resposta.
- No desacoplamento é importante separar somente a lógica que mantém o componente puro.
- Para sabermos se o componente é puro basta mover o componente de um lugar para outro da aplicação e o mesmo deverá continuar funcionando, pois o mesmo não depende de um contexto ou de uma lógica acoplada a outro componente.

<br>

<div id="id3"></div>

<!-- ### 📌 Funções e eventos no React -->

<br>

<div id="id4"></div>

<!-- ### 📌 Composição vs Customização -->

<br>

<div id="id5"></div>

<!-- ### 📌 Condicionais no render -->

<br>
