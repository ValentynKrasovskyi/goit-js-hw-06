function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector('body')
const colorSpan = document.querySelector('.color')
const btn = document.querySelector('.change-color')

btn.addEventListener('click', () => {
  const color = getRandomHexColor();
  bodyEl.style.backgroundColor = color;
  colorSpan.textContent = color;
});
