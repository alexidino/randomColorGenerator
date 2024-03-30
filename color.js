const colorOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];

const currentColor = document.querySelector('#currentColor');
const container = document.querySelector('.container');
const body = document.querySelector('body');

const getHex = () => {
  let color = '#';
  for (let i = 1; i <= 6; ++i) {
    const getRandomNumber = Math.floor(Math.random() * 15);
    color += colorOptions[getRandomNumber];
  }
  return color;
}





const setHex = () => {
  const newColor = getHex();
  currentColor.textContent = newColor;
  body.style.backgroundColor = newColor;
};

