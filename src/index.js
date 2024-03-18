import './css/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ApiHandler from './ApiHandler';

const displayController = (() => {
  const colorSeedInputEl = document.querySelector('.input-color');
  const modeInputEl = document.getElementById('mode');
  const form = document.getElementById('schemerForm');
  let colorSeed = colorSeedInputEl.value.slice(1).toUpperCase();
  let mode = modeInputEl.value;

  // console.log(colorSeed);
  // console.log(mode);

  // render the colors when form is submitted
  // we need the color properties from the data returned
  const renderDisplay = async (e) => {
    e.preventDefault();
    const data = await ApiHandler.getData(colorSeed, mode);
    console.log(data);
  };

  // Event Listeners
  colorSeedInputEl.addEventListener('change', (e) => {
    colorSeed = e.target.value.slice(1).toUpperCase();
  });

  modeInputEl.addEventListener('change', (e) => {
    mode = e.target.value;
  });

  form.addEventListener('submit', renderDisplay);
})();
