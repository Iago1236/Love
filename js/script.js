// Executa quando a página terminar de carregar
window.onload = function () {
  const audio = document.getElementById("bg-music"); // Seleciona o áudio
  const musicBtn = document.getElementById("musicBtn"); // Seleciona o botão de música

  // Adiciona evento de clique no botão
  musicBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play(); // Se estiver pausado, começa a tocar
      musicBtn.innerHTML = "🔇"; // Muda o ícone para indicar que está tocando
    } else {
      audio.pause(); // Se estiver tocando, pausa
      musicBtn.innerHTML = "🎵"; // Muda o ícone para indicar que está pausado
    }
  });
};

// Função chamada ao clicar em um botão (Sim ou Não)
function moveButton(btn) {
    const maxX = window.innerWidth - btn.offsetWidth - 20; // Define a posição máxima horizontal
    const maxY = window.innerHeight - btn.offsetHeight - 20; // Define a posição máxima vertical

    const randomX = Math.floor(Math.random() * maxX); // Gera uma posição aleatória X
    const randomY = Math.floor(Math.random() * maxY); // Gera uma posição aleatória Y

    btn.style.position = "fixed"; // Define o botão como fixo (para movê-lo pela tela)
    btn.style.left = `${randomX}px`; // Aplica a nova posição horizontal
    btn.style.top = `${randomY}px`; // Aplica a nova posição vertical
}
