import ExibirInformacoes from "./exibirInformacoes.js";
import initColocarInformacoes from "./colocarInformacoes.js";

export default class Validacao {
  constructor(inputCidade, botaoPesquisa) {
    this.inputCidade = document.querySelector(inputCidade);
    this.botaoPesquisa = document.querySelector(botaoPesquisa);
    this.apiKey = 'b13b0b576ed5a12bba4c925bd48f583a';
    this.classErro = 'erroInput'
    this.lingagemApi = 'pt_br'

    this.validaInput = this.validaInput.bind(this);
  }

  // Valida o input
  validaInput(event) {
    event.preventDefault()
    this.divErroMensage = document.querySelector('.mensagemDeErro');
    if(this.inputCidade.value === "") {
      this.divErroMensage = this.mensagemDeErro("Preencha o campo de texto para procurar a cidade!");
      this.inputCidade.classList.add(this.classErro)
      return
    } else if(this.divErroMensage){
      this.divErroMensage.remove()
      this.inputCidade.classList.remove(this.classErro)
    }
    this.validaCidade()
  }

  // Valida a cidade
  async validaCidade() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.inputCidade.value}&appid=${this.apiKey}&lang=${this.lingagemApi}`)
    this.dados = await response.json()
    if(this.dados.message) {
      this.divErroMensage = this.mensagemDeErro('Cidade não encontrada, tente novamente.')
      this.inputCidade.classList.add(this.classErro)
      return
    }
    this.exibirInformacoes()
  }

  exibirInformacoes() {
    const exibirInformacoes = new ExibirInformacoes('.conteiner_informacoes')
    exibirInformacoes.init()
    initColocarInformacoes(this.dados)
  }

  // Cria uma div com a mensagem de erro
  mensagemDeErro(textoErro) {
    // se a div já existir não executa
    if(this.divErroMensage) return
    
    const divMensagemErro = document.createElement('div');
    divMensagemErro.classList.add('mensagemDeErro');
    divMensagemErro.innerHTML = `<p>${textoErro}</p>`;
    this.inputCidade.parentElement.appendChild(divMensagemErro)
    return divMensagemErro;
  }

  // adiciona o evento de click
  adicionaEventoClick() {
    this.botaoPesquisa.addEventListener('click', this.validaInput)
  }

  init() {
    if(this.botaoPesquisa && this.inputCidade) {
      this.adicionaEventoClick()
    }
    return this;
  }
} 