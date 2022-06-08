document.addEventListener("DOMContentLoaded", () => {
  const bird = document.querySelector(".bird");
  const upper = document.querySelector(".upper");
  const bottom = document.querySelector(".bottom");
  const game = document.querySelector(".full");

  let x = 100;
  let y = 410;
  let maxy = 95;
  let gravity = 2.5;
  let gameisover = false;
  let gap = 400;
  //max bar bottom =115

  function play() {
    y -= gravity;
    bird.style.bottom = y + "px";
    bird.style.left = x + "px";
  }
  let gameid = setInterval(play, 20);

  function jump() {
    if (y < 380) y += 40;
    bird.style.bottom = y + "px";
  }
  function control(e) {
    if (e.keyCode == 32) jump();
  }
  document.addEventListener("keyup", control);
  function genbars() {
    let barleft = 1200;
    let barheight = Math.random() * 60;
    let barbottom = barheight;
    const bar = document.createElement("div");
    const topbar = document.createElement("div");
    if (!gameisover) {
      bar.classList.add("downbar");
      topbar.classList.add("topbar");
    }
    game.appendChild(bar);
    game.appendChild(topbar);
    bar.style.left = barleft + "px";
    bar.style.bottom = barbottom + "px";

    topbar.style.left = barleft + "px";
    topbar.style.bottom = barbottom + gap + "px";

    function movebar() {
      barleft -= 4;
      bar.style.left = barleft + "px";
      topbar.style.left = barleft + "px";
      if (barleft == -60) {
        clearInterval(timer);
        game.removeChild(bar);
        game.replaceChild(topbar);
      }
      if ((barleft > 120 && barleft < 180 && (y < barbottom + 190 || y>barbottom+gap -150 ) ) || y == 0) {
        gameover();
        clearInterval(timer);
      }
    }
    let timer = setInterval(movebar, 20);
    if (!gameisover) setTimeout(genbars, 3000);
  }
  genbars();
  function gameover() {
    clearInterval(gameid);
    gameisover = true;
    document.removeEventListener("keyup", control);
  }
});
