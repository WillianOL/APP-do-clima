export default class ExibirInformacoes {
  constructor(conteiner) {
    this.conteiner = document.querySelector(conteiner);
    this.classActive = 'conteinerAparece';
    this.classDesable = 'conteinerDesaparece';
  }
  exibirConteiner() {
    if (this.conteiner.classList.contains(this.classActive)) {
      this.conteiner.classList.remove(this.classActive);
      this.conteiner.classList.add(this.classDesable);
      setTimeout(() => {
        this.conteiner.classList.remove(this.classDesable);
        this.conteiner.classList.add(this.classActive);
      }, 500);
    }
    this.conteiner.classList.add(this.classActive);
  }

  init() {
    if (this.conteiner) {
      this.exibirConteiner();
    }
    return this;
  }
}
