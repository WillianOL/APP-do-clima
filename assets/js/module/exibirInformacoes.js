export default class ExibirInformacoes {
  constructor(conteiner) {
    this.conteiner = document.querySelector(conteiner);
    this.classActive = 'conteinerAparece';
    this.classDisabled = 'conteinerDesaparece';
  }
  exibirConteiner() {
    if (this.conteiner.classList.contains(this.classActive)) {
      this.conteiner.classList.remove(this.classActive);
      this.conteiner.classList.add(this.classDisabled);
      setTimeout(() => {
        this.conteiner.classList.remove(this.classDisabled);
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
