const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const getBodyRandomBg = () => {
  body.style.backgroundColor = getRandomHexColor();
};
let intervalId = null;

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
  startBtn.setAttribute('disabled', true);
  stopBtn.removeAttribute('disabled');
  intervalId = setInterval(() => {
    getBodyRandomBg();
  }, 1000);
}
function onStopBtnClick() {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
  clearInterval(intervalId);
}
