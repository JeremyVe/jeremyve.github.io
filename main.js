import './style.css'

let isNightMode = false;

const nightModeToggle = document.querySelector('#toggle-night-mode');
if (nightModeToggle) {
  nightModeToggle.addEventListener('click', () => {
    if (isNightMode) {
      document.documentElement.classList.remove('dark', 'bg-gray-900');
      document.querySelector('.sun').classList.add('invisible')
      document.querySelector('.moon').classList.remove('invisible')
      isNightMode = false;
    } else {
      document.documentElement.classList.add('dark', 'bg-gray-900');
      document.querySelector('.sun').classList.remove('invisible')
      document.querySelector('.moon').classList.add('invisible')
      isNightMode = true;
    }
  })
}
