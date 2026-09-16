const player = document.getElementById("radioPlayer");
const button = document.getElementById("listenBtn");
const status = document.getElementById("status");

button.addEventListener("click", async () => {
  try {
    if (player.paused) {
      await player.play();
      button.textContent = "❚❚ Pausar radio";
      status.textContent = "Reproduciendo Ocean Park Radio en vivo";
    } else {
      player.pause();
      button.textContent = "▶ Escuchar en vivo";
      status.textContent = "Radio pausada";
    }
  } catch (e) {
    status.textContent = "No se pudo iniciar automáticamente. Probá el botón ▶ del reproductor.";
  }
});

player.addEventListener("playing", () => {
  button.textContent = "❚❚ Pausar radio";
  status.textContent = "Reproduciendo Ocean Park Radio en vivo";
});
player.addEventListener("pause", () => {
  button.textContent = "▶ Escuchar en vivo";
});
player.addEventListener("error", () => {
  status.textContent = "No se pudo conectar al streaming. Verificá que la señal esté activa.";
});
document.getElementById("year").textContent = new Date().getFullYear();
