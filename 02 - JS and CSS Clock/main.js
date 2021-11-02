const setDate = () => {
  const now = new Date();
  const secs = now.getSeconds();
  const secsDeg = (( secs / 60 ) * 360);
  const secH = document.querySelector('.second-hand');
  secH.style.transform = `rotate(${secsDeg}deg)`;
}

setInterval(setDate, 1000);