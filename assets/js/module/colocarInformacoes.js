export default function initColocarInformacoes(dados) {
  const nomeCidade = document.querySelector("[data-informacao='nomeCidade']")
  const temperatura = document.querySelector("[data-informacao='temperatura']")
  const tempo = document.querySelector("[data-informacao='tempo']")
  const humidade = document.querySelector("[data-informacao='humidade']")
  const ventos = document.querySelector("[data-informacao='ventos']")
  const iconeBandeira = document.querySelector(".bandeira")
  
  nomeCidade.innerText = dados.name;
  temperatura.innerText = `${Math.round(dados.main.temp - 273.15)}°C`;
  tempo.innerText = dados.weather[0].description;
  humidade.innerText = `${dados.main.humidity}%`
  ventos.innerText = `${Math.round((dados.wind.speed * 3.6))}Km/h`
  iconeBandeira.setAttribute('src', `https://flagcdn.com/w40/${dados.sys.country.toLowerCase()}.png`)
}