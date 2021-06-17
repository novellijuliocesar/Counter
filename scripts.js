const display = document.querySelector('h3');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
const increaseBtn = document.querySelector('.increase');
let number = 0;

const colorValue = (value) => {
  return (value < 0) ? '#D50000' : '#ec5b8c';
}

const paintColor = () => {
  display.textContent = number;
  display.style.color = colorValue(number);
}

const increaseCount = () => {
  number += 1;
  paintColor();
}

const decreaseCount = () => {
  number -=1;
  paintColor();
}

const resetCount = () => {
  number = 0;
  paintColor();
}

increaseBtn.addEventListener('click', increaseCount);
decreaseBtn.addEventListener('click', decreaseCount);
resetBtn.addEventListener('click', resetCount);