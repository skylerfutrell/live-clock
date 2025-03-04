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

    // Mouse move effect to change background color
    document.addEventListener("mousemove", function (e) {
        // Get the mouse position relative to the window's size
        const x = (e.clientX / window.innerWidth) * 255; // Normalize X position to RGB range (0-255)
        const y = (e.clientY / window.innerHeight) * 255; // Normalize Y position to RGB range (0-255)

        // Set the new background color using the mouse position
        document.body.style.backgroundColor = `rgb(${Math.floor(x)}, ${Math.floor(y)}, 150)`;
    });
});

function clockUpdate() {
    let date = new Date();
    let h = addZero(date.getHours());
    let m = addZero(date.getMinutes());
    let s = addZero(date.getSeconds());

    document.querySelector(".digital-clock").innerHTML = `${h}:${m}:${s}`;
}

function addZero(x) {
    return x < 10 ? "0" + x : x;
}

