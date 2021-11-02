const setDate = () => {
  const now = new Date();
  const secs = now.getSeconds();
  const secsDeg = (( secs / 60 ) * 360) + 90;
  const secH = document.querySelector('.second-hand');
  secH.style.transform = `rotate(${secsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = (( mins / 60) * 360) + 90;
  const minH = document.querySelector('.min-hand');
  minH = style.transform = `rotate(${minsDeg}deg)`;
}

setInterval(setDate, 1000);