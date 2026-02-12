function openEnvelope() {
  document.getElementById("envelope-screen").style.display = "none";
  document.getElementById("valentine-screen").classList.remove("hidden");
  document.getElementById("bg-music").play();
}

function showLove() {
  document.getElementById("surprise").innerHTML =
    "Sheree, you are my forever Valentine ❤️🌹";
}
