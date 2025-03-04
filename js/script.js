document.addEventListener("DOMContentLoaded", function () {
    clockUpdate();
    setInterval(clockUpdate, 1000);
  
    // Radio Button Logic
    const radioBtn = document.querySelector(".radio-button");
    const radio = document.getElementById("radio-song");
  
    let isPlaying = false;
    
    radioBtn.addEventListener("click", function () {
      if (isPlaying) {
        radio.pause();
        radioBtn.textContent = "📻 Play Radio";
      } else {
        radio.play();
        radioBtn.textContent = "⏸️ Stop Radio";
      }
      isPlaying = !isPlaying;
    });
  });
  
  function clockUpdate() {
    let date = new Date();
    let h = addZero(twelveHour(date.getHours()));
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());
  
    document.querySelector(".digital-clock").innerHTML = `${h}:${m}:${s}`;
  }
  
  function addZero(x) {
    return x < 10 ? "0" + x : x;
  }
  
  function twelveHour(x) {
    return x > 12 ? x - 12 : x == 0 ? 12 : x;
  }
  