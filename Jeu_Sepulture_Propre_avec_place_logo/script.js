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

// ✅ Minuteur (timer)
let timerInterval = setInterval(() => {
  timeLeft--;
  document.getElementById("timer").textContent = `Temps restant : ${timeLeft}s`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    endGame("⏱️ Temps écoulé ! Essayez encore.");
  }
}, 1000);

// ✅ Fin de jeu
function endGame(message) {
  document.getElementById("result").textContent = message;

  // Désactiver toutes les tâches
  document.querySelectorAll('.task').forEach(task => {
    task.style.pointerEvents = "none";
  });

  // Arrêter le timer (au cas où)
  clearInterval(timerInterval);
}
