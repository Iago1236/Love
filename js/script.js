window.onload = function () {
  const audio = document.getElementById("bg-music");
  const musicBtn = document.getElementById("musicBtn");
  setInterval(emojiFlutuante, 1000);

  musicBtn.addEventListener("click", function () {
    if (audio.paused) {
      audio.play();
      musicBtn.innerHTML = "🔇";
    } else {
      audio.pause();
      musicBtn.innerHTML = "🎵";
    }
  });
};

function moveButton(btn) {
  const maxX = window.innerWidth - btn.offsetWidth - 20;
  const maxY = window.innerHeight - btn.offsetHeight - 20;
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  btn.style.position = "fixed";
  btn.style.left = `${randomX}px`;
  btn.style.top = `${randomY}px`;
}

function respostaSecreta() {
  document.getElementById("secretAnswerBtn").style.display = "none";

  for (let i = 0; i < 10; i++) {
    setTimeout(criarEmojiFlutuante, i * 300);
  }

  const caixinha = document.getElementById("caixinha");
  caixinha.innerHTML = `
    <h1>Então me responda...💘</h1>
    <h2>O quanto você me ama?</h2>
    <div class="resposta-amor">
      <input type="range" id="amorRange" min="0" max="2000" value="2000" oninput="atualizaAmor()" />
      <p>Esse tanto! (<span id="valorAmor">2000</span>%)</p>
      <div class="emoji-amor" id="emojiAmor">💗</div>
      <button class="buttons" onclick="respostaFinalDoAmor()">Enviar 💌</button>
    </div>`;
}

function atualizaAmor() {
  const valor = document.getElementById("amorRange").value;
  document.getElementById("valorAmor").innerText = valor;

  const emoji = valor >= 2000 ? "💗💗🥰😍" :
                valor >= 1500 ? "💞💘🥰" :
                valor >= 1000 ? "💖💝" :
                valor >= 600 ? "❤️" :
                valor >= 300 ? "💕" :
                valor >= 100 ? "💔" : "😢";

  document.getElementById("emojiAmor").innerText = emoji;
}

function respostaFinalDoAmor() {
  const valor = parseInt(document.getElementById("amorRange").value);
  const caixinha = document.getElementById("caixinha");

  if (valor >= 1500) {
    caixinha.innerHTML = `
      <h1>VOCÊ ME AMA TUDO ISSO!! 😍💖</h1>
      <p>Você me ama muitooo! Agora somos namorados 💍💖</p>`;
  } else if (valor >= 800) {
    caixinha.innerHTML = `
      <h1>Eu sabia!!! 😍</h1>
      <p>Você me ama demais! Agora somos namorados 💍💓</p>`;
  } else {
    caixinha.innerHTML = `
      <h1>Hmm... Só!😢</h1>
      <p>Eu esperava mais Annelise.. Mas tudo bem, ainda teamo! 💗</p>`;
  }
}

// Emoji solto automaticamente a cada segundo
function emojiFlutuante() {
  const emojis = ["💖", "💘", "💕", "💗", "💞", "💝", "💓", "❤️", "😍", "🥰", "🐻", "😘"];
  const emoji = emojis[Math.floor(Math.random() * emojis.length)];

  const span = document.createElement("span");
  span.className = "floating-emoji";
  span.innerText = emoji;

  span.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(span);

  setTimeout(() => {
    span.remove();
  }, 4000);
}

// Emoji extra na resposta secreta
function criarEmojiFlutuante() {
  emojiFlutuante();
}
