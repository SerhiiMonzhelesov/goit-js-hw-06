function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnChangeBgColor = document.querySelector('.change-color')
const valueColor = document.querySelector('.color')
const elForChangeColor = document.querySelector('body')


btnChangeBgColor.addEventListener('click', () => {
  const color = getRandomHexColor();
  elForChangeColor.style.backgroundColor = color;
  valueColor.textContent = color;
})
  


