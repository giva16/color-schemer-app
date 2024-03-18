import './css/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';
import ApiHandler from './ApiHandler';

const displayController = (() => {
  const colorSeedInputEl = document.querySelector('.input-color');
  const modeInputEl = document.getElementById('mode');
  const form = document.getElementById('schemerForm');
  let colorSeed = colorSeedInputEl.value.slice(1).toUpperCase();
  let mode = modeInputEl.value;

  // render the colors when form is submitted
  const renderColor = (colorEl, color) => {
    colorEl.style.backgroundColor = color;
  };

  // render hexcode when form is submitted
  const renderHexCode = (hexEl, hex) => {
    hexEl.textContent = hex;
  };
  // render the color + hex code to color div
  const renderDisplay = async (e) => {
    e.preventDefault();
    const data = await ApiHandler.getData(colorSeed, mode);
    const colorEls = document.querySelectorAll('.scheme');
    const hexEls = document.querySelectorAll('.hex-code');
    const colors = data.colors;

    for (let i = 0; i < colors.length; i++) {
      const hex = colors[i].hex.value;
      renderColor(colorEls[i], hex);
      renderHexCode(hexEls[i], hex);
    }
  };

  // Event Listeners
  colorSeedInputEl.addEventListener('change', (e) => {
    colorSeed = e.target.value.slice(1).toUpperCase();
  });

  modeInputEl.addEventListener('change', (e) => {
    mode = e.target.value;
  });
  form.addEventListener('submit', renderDisplay);

  // Make the app submit at start to show the user an example result
  document.addEventListener('DOMContentLoaded', renderDisplay);
})();
