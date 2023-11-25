export default function initColocarInformacoes(dados) {
  const nomeCidade = document.querySelector("[data-informacao='nomeCidade']")
  const temperatura = document.querySelector("[data-informacao='temperatura']")
  const tempo = document.querySelector("[data-informacao='tempo']")
  const humidade = document.querySelector("[data-informacao='humidade']")
  const ventos = document.querySelector("[data-informacao='ventos']")
  
  nomeCidade.innerText = dados.name;
  temperatura.innerText = `${Math.floor(dados.main.temp - 273.15)}°C`;
  tempo.innerText = dados.weather[0].description;
  humidade.innerText = `${dados.main.humidity}%`
  ventos.innerText = `${Math.floor((dados.wind.speed * 3.6))}Km/h`
}