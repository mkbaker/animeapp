const playPause = anime({
  targets: "div.box",
  translateX: [{ value: 800, duration: 3000 }, { value: 0, duration: 3000 }],
  rotate: {
    value: "3turn",
    easing: "easeInOutSine"
  },
  delay: function(el, i, one) {
    return i * 1000;
  },
  loop: true,
  autoplay: false
});


//this command is part of API; also works for pause
// playPause.play();
document.querySelector('#boxes .play').onclick = playPause.play;
document.querySelector("#boxes .pause").onclick = playPause.pause;