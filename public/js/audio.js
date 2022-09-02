// ==== audio part=====
var audioplay = document.createElement('audio');
audioplay.setAttribute('src', 'BG-Music.mp3');
audioplay.loop = true;
audioplay.preload = "auto"; 

window.addEventListener("mouseover", () => {
  audioplay.play();
});