export default function colocarInformacoes(dados) {
  const nomeCidade = document.querySelector("[data-informacao='nomeCidade']");
  const temperatura = document.querySelector("[data-informacao='temperatura']");
  const tempo = document.querySelector("[data-informacao='tempo']");
  const humidade = document.querySelector("[data-informacao='humidade']");
  const ventos = document.querySelector("[data-informacao='ventos']");
  const iconeBandeira = document.querySelector('.bandeira');

  const descricaoText = dados.weather[0].description;

  // Muda o background dependendo do clima
  const mudarBackgorund = () => {
    const videoBackground = document.querySelector('.videoBackground');
    const valoresPossiveis = ['neve', 'chuva', 'tempestade', 'nuvens', 'nublado'];
    const itemTempo = valoresPossiveis.find(item => descricaoText.includes(item) ? item : '');
    switch(itemTempo) {
      case 'neve':
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/nevando.mp4');
        break
      case 'chuva':
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/chuvendo.mp4');
        break
      case 'tempestade':
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/tempestade.mp4');
        break
      case 'nuvens':
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/ceuNublado.mp4');
        break
      case 'nublado':
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/ceuNublado.mp4');
        break
      default:
        videoBackground.setAttribute('src', 'https://willianol.github.io/APP-do-clima/img/ceuLimpo.mp4');
    }
  }

  // Faz o innerText das informações
  const innerInformacoes = () => {
    const semLetra = descricaoText.slice(descricaoText.length - descricaoText.length + 1);
    const letraMaiuscola = descricaoText[0].toUpperCase();
    tempo.innerText = letraMaiuscola + semLetra;
    nomeCidade.innerText = dados.name;
    temperatura.innerText = `${Math.round(dados.main.temp - 273.15)}°C`;
    humidade.innerText = `${dados.main.humidity}%`;
    ventos.innerText = `${Math.round(dados.wind.speed * 3.6)}Km/h`;
    iconeBandeira.setAttribute('src',`https://flagcdn.com/w40/${dados.sys.country.toLowerCase()}.png`);
    mudarBackgorund();
  };
  innerInformacoes();
}
