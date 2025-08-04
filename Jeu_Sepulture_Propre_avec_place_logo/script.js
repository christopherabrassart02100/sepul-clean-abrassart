let selectedTool = null;
let timeLeft = 60;
let errors = 0;
let cleaned = 0;

function selectTool(tool) {
  selectedTool = tool;
}

document.querySelectorAll('.task').forEach(task => {
  task.addEventListener('click', () => {
    if (!selectedTool) return;

    const correctTool = task.getAttribute('data-tool');
    if (selectedTool === correctTool) {
      task.classList.add('cleaned');
      cleaned++;
      checkWin();
    } else {
      errors++;
      alert("Mauvais outil !");
      if (errors >= 3) {
        endGame("Perdu ! Trop d'erreurs.");
      }
    }
  });
});

function checkWin() {
  if (cleaned === 5) {
    endGame("Bravo ! La sépulture est impeccable.");
  }
}

function endGame(message) {
  clearInterval(timerInterval);
  document.getElementById("result").textContent = message;
  document.getElementById("game").style.pointerEvents = "none";
}

const timerInterval = setInterval(() => {
  timeLeft--;
  document.getElementById("timer").textContent = `Temps restant : ${timeLeft}s`;
  if (timeLeft <= 0) {
    endGame("Temps écoulé !");
  }
}, 1000);