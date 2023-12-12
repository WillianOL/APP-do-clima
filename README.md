<div> 
  <h1 align="center">Previsão do clima - JS🌦️</h1> 
</div>

<div>
  <h3 align="center">Uma plicação que pode prever o clima em qualquer cidade do mundo.</h3>
</div>

<div align='center'>
	<img src= "https://github.com/WillianOL/APP-do-clima/assets/112639055/006e3172-e4f0-4bc4-8ffa-2a7f662dea1b" width='850px'>
</div>

## Ferramentas utilizadas🛠️

<div>
	<p>Para a elaboração do projeto, foram usadas as tecnologias:</p>
</div>

<ul>
 	<li>
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript
 	</li>
	<br>
	<li> 
		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg"> HTML
 	</li>
	<br>
 	<li> 
  		<img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg"> CSS 
 	</li>
</ul>

<div>
	<h2>Sobre o projeto📃</h2>
</div>

<div>
 <p>A aplicação consiste em um APP que prevê o clima em qualquer cidade do mundo, exibindo a humidade, velocidade dos ventos, temperatura e bandeira de onde a cidade pertence. Ao depender do tempo, é exibido um video de fundo deixando o resultado bem mais interessante.</p>
 <p>O projeto consome os dados da API openweathermap, que dispôe de informações sobre o clima do mundo. Um dos principais desafios que enfrentei ao desenvolver esse projeto, foi na hora que consumir os dados da aplicação. Por estar tudo em inglês(ainda estou aprendendo) foi um pouco complicado. Porém fui lendo a documentação e aprendendo como se usar e consumir os dados corretamente. Um exemplo é a velocidade dos ventos, onde na API são fornecidos em metros por segundo m/s, por isso, tive que transformar em km/h. E entre outras coisas que tive que entender e modificar.</p>
</div>
 
### Acessar projeto ✈

◻<a href="https://willianol.github.io/APP-do-clima/assets/index.html">App previsão do clima</a>

## <img align="center" width="30" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg"> JavaScript

<div>
  <h2>Organização</h2>
  <p>Preferi separar o código da aplicação em três arquivos para ficar mais organizado. Dividindo em:</p>
  <ul>
    <li><strong>colocarInformacoes</strong> - Responsável por exibir as informações em tela;</li>
    <li><strong>exibirInformacoes</strong> - Exibi o conteiner onde fica as informações, com uma pequena animação;</li>
    <li><strong>validacao</strong> - Responsável por fazer a validação de input e cidade;</li>
  </ul>
  <div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/5f1d4fee-efba-40ec-ad6a-a3b4aa96e82e" width="250px">
	</div>
</div>

<div>
  <h3>Validação de input</h3>
  <p>Para fazer a validação do input e da cidade, no caso do input, verificar se o usuário digitou algo nele, criei uma classe para isso. Para executa-la, primeiro na criação da instancia é passado o input e o botão de pesquisa.</p>
  <div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/ef3322d7-d6a7-4b33-a6b4-06c5578e03b0" width="650px">
  </div>
	&nbsp;
	<p>No construtor são criados alguns dados importantes, como a key da API, a linguagem, a classe de erro, botao e o input.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/b055180d-228a-449a-b711-db9d7614a2ea" width="650px">
  	</div>
	&nbsp;
	<p>Executando o método init(), é feito a verificação se o input e o botão existem dentro do HTML. Para garantir que o código não apresente algum tipo de erro. No init, é executado a função que adiciona o evento de click no botão chamada <strong>adicionaEventoClick()</strong></p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/8ec00111-dae0-4b89-b2a0-656b23cd8ff5" width="650px">
  	</div>
	&nbsp;
	<p>Ao clicar no botão, é executada a função <strong>validaInput</strong>, nela é feita uma verificação: se o valor do input estiver vazio "", exibe a mensagem de erro e para a execução retornando nada. Se não, tira a mensagem de erro e executa a função <strong>validaCidade</strong>.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/cf265cc0-3c29-4242-ac87-f00f56e27eee" width="650px">
  	</div>
</div>

<div>
	<h3>Validação de cidade</h3>
	<p>Na função validaCidade é feito um fetch da API, e como ela é assincrona utilizei o async e await. No fetch, é passado o nome da cidade(valor do input), a key da API e a linguagem. Caso a cidade não seja encontrada, a API retorna um JSON com a mensagem de erro, tirei vantegem disso para o caso de, se a API retornar essa mensagem de erro, executa a função para exibir a mensagem de erro. Se não, segue o fluxo do código e executa a função <strong>exibirInformações()</strong>.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/530c0041-3c67-43d6-8daf-391e275bef2e" width="650px">
  	</div>
	<p>Depois, na função exibirInformações é criada uma nova instancia da classe ExibirInformacoes passando o conteiner onde vai ficar as informações do clima. E execudando o método init() para ativar o funcionamento da classe</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/efc88c54-3df8-4417-af5f-961ab418821a" width="650px">
  	</div>
</div>

<div>
	<h3>Exibir conteiner das informações</h3>
	<p>Na classe ExibirInformacoes, é definido no this o conteiner, e a classe ativo e inativo para animar o conteiner na hora de exibir as informações.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/c60602ad-45d5-430a-875a-6985164c8bf4" width="650px">
  	</div>
	&nbsp;
	<p>No método init() é verificado se o conteiner onde vai ficar as informações existe e se existir executa a função <strong>exibirConteiner()</strong>.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/84248396-b1dd-46ce-b236-8a7646ba7c81" width="650px">
  	</div>
	&nbsp;
	<p>Na função, é feito uma verificação: se o conteiner tiver a classe de ativo(classActive), se sim remove a classe active, adiciona a classe de disabled(classDisabled). Depois, com um setTimeout, é removido a classe disabled e adiciona a classe active; Pode parecer confuso, mas basicamente se o conteiner estiver ativo, ele esconde e depois de 500ms exibe ele novamente, sendo animado com o CSS. Fiz isso para caso de se o usuário pesquisar novamente o conteiner esconde a aparece novamente. Caso seja a primeira pesquisa, o conteiner simplismente ativa.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/64fe0091-80de-4bcd-b76e-93ec7a4ffebf" width="650px">
  	</div>
</div>

<div>
	<h3>Colocar informações na tela</h3>
	<p>Na função colocarInforamções, primeiro são pegos os itens que serão exibidos na tela do usuário. Como o nome da cidade e outros. O argumento dados contem o retorno da API.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/22e54d7c-295f-4eb4-baff-7462c954cb8b" width="650px">
  	</div>
	&nbsp;
	<p>Depois, a função innerInformacoes é executada colocando as informações nos spans dos itens atarvés do innerText. No caso da temperatura e velocidade dos ventos, são feitos alguns calculos para transformar os dados de fahrenheit para celsius e de métros por segundo para km/h. A bandeira dos paises são pegos da API flagpedia, onde é passado a localidade. Ao final, é executado a função mudarBackgorund().</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/09094431-1a8b-4686-9eae-f5a5cf25258e" width="650px">
  	</div>
	&nbsp;
	<h4>Mudar background(video de fundo)</h4>
	<p>Para mudar o video de fundo, selecionei 5 vídeos para cada clima(chuva, nublado, nevando, tempestade e céu limpo). Para fazer isso, criei uma array com 5 possíveis resultados, e depois na variável itemTempo utilizei o método find para retornar o item da array que seja igual a descrição da API. Depois, com o shitch, dependendo do resultado a imagem de fundo recebe um novo src com o video.</p>
	<div align="center">
	  <img align="center" src="https://github.com/WillianOL/APP-do-clima/assets/112639055/9d3a1154-79af-4f1f-b6b5-748def5051dc" width="650px">
  	</div>
</div>


































