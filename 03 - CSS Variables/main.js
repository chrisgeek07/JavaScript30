
const inputs = document.querySelectorAll('.controls input');

const handleUpdate = (event) => {
  // console.log(event.target.value);
  const suffix = event.target.dataset.sizing || '';
  console.log(suffix);
  console.log(event.target.name);
  document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix);
}

inputs.forEach( input => input.addEventListener('change', handleUpdate));
inputs.forEach( input => input.addEventListener('mousemove', handleUpdate));

