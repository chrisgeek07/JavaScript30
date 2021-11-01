

window.addEventListener("keydown" , (event) => {
    console.log(event.keyCode);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(audio);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add('playing');

})