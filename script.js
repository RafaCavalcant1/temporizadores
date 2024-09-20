let cronometroSegundos = 0;
let cronometroInterval;

function startCronometro() {
  cronometroInterval = setInterval(() => {
    cronometroSegundos++;
    document.getElementById('cronometro').innerText = formatTime(cronometroSegundos);
  }, 1000);
}

function pauseCronometro() {
  clearInterval(cronometroInterval);
}

function resetCronometro() {
  clearInterval(cronometroInterval);
  cronometroSegundos = 0;
  document.getElementById('cronometro').innerText = "00:00:00";
}

let countdownSegundos = 10;
let countdownInterval;

function startCountdown() {
  clearInterval(countdownInterval);
  countdownSegundos = 10; 
  document.getElementById('contagemRegressiva').innerText = formatTime(countdownSegundos);

  countdownInterval = setInterval(() => {
    countdownSegundos--;
    document.getElementById('contagemRegressiva').innerText = formatTime(countdownSegundos);

    if (countdownSegundos <= 0) {
      clearInterval(countdownInterval);
      alert("Contagem Regressiva Terminou!");
    }
  }, 1000);
}

function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600).toString().padStart(2, '0');
  const mins = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
  const secs = (seconds % 60).toString().padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}
