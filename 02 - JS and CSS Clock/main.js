const setDate = () => {
  const now = new Date();
  const secs = now.getSeconds();
  const secsDeg = (( secs / 60 ) * 360) + 90;
  const secH = document.querySelector('.second-hand');
  secH.style.transform = `rotate(${secsDeg}deg)`;

  const mins = now.getMinutes();
  const minsDeg = (( mins / 60) * 360) + 90;
  const minH = document.querySelector('.min-hand');
  minH.style.transform = `rotate(${minsDeg}deg)`;

  const hours = now.getHours();
  const hoursDeg = (( hours / 12 ) * 360) + 90;
  const hourH = document.querySelector('.hour-hand');
  hourH.style.transform = `rotate(${hoursDeg}deg)`;


}

setInterval(setDate, 1000);