let clock = document.querySelector('#clock');

function atualizaData() {
  const dataAtual = new Date();
  const horario = dataAtual.toLocaleTimeString();
  clock.innerHTML = horario;
}

setInterval(atualizaData, 5000);