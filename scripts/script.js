const games = [
  {
    name: "The Witcher 3",
    hints: [
      "Bir canavar avcısını oynuyorsun, açık dünya.",
      "Baş karakterin adı Geralt.",
      "CD Projekt RED tarafından geliştirildi."
    ]
  },
  {
    name: "Minecraft",
    hints: [
      "Küp küp bir dünya, istediğini inşa et.",
      "Creeper'dan uzak dur!",
      "Mojang tarafından geliştirildi."
    ]
  },
  {
    name: "GTA V",
    hints: [
      "Suçla dolu bir şehir, üç karakterli hikaye.",
      "Los Santos şehrinde geçiyor.",
      "Rockstar Games tarafından geliştirildi."
    ]
  },
  {
    name: "Portal",
    hints: [
      "Zekice bulmacalar ve portallar.",
      "Aperture Science'da geçiyor.",
      "Glados seni izliyor."
    ]
  },
  {
    name: "Among Us",
    hints: [
      "Uzayda geçen bir sosyal çıkarım oyunu.",
      "Impostor kim?",
      "Ekip arkadaşlarınıza güvenebilir misiniz?"
    ]
  },
  {
    name: "Elden Ring",
    hints: [
      "Zorlayıcı boss savaşları ve açık dünya.",
      "FromSoftware tarafından geliştirildi.",
      "George R. R. Martin katkıda bulundu."
    ]
  },
  {
    name: "Cyberpunk 2077",
    hints: [
      "Gelecekte geçen bir açık dünya RPG.",
      "Night City'de geçiyor.",
      "Keanu Reeves'in karakteri var."
    ]
  }
];

let selectedGame;
let hintIndex = 0;
let gameEnded = false;

function startGame() {
  const randomIndex = Math.floor(Math.random() * games.length);
  selectedGame = games[randomIndex];
  hintIndex = 0;
  gameEnded = false;

  document.getElementById("hint").textContent = `İpucu: ${selectedGame.hints[hintIndex]}`;
  document.getElementById("result").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("restartBtn").style.display = "none";
}

function checkGuess() {
  if (gameEnded) return;

  const guess = document.getElementById("guessInput").value.trim().toLowerCase();
  const result = document.getElementById("result");

  if (guess === selectedGame.name.toLowerCase()) {
    result.textContent = `Tebrikler! Doğru cevap: ${selectedGame.name}`;
    result.style.color = "lightgreen";
    gameEnded = true;
    document.getElementById("restartBtn").style.display = "inline-block";
  } else {
    hintIndex++;
    if (hintIndex < selectedGame.hints.length) {
      document.getElementById("hint").textContent = `İpucu: ${selectedGame.hints[hintIndex]}`;
      result.textContent = "Yanlış tahmin. Yeni ipucu:";
      result.style.color = "orange";
    } else {
      result.textContent = `Bilemedin! Doğru cevap: ${selectedGame.name}`;
      result.style.color = "red";
      gameEnded = true;
      document.getElementById("restartBtn").style.display = "inline-block";
    }
  }
}

// Sayfa yüklendiğinde oyun başlasın
window.onload = startGame;


