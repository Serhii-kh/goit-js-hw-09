const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');
const DISABLED = `disabled`;
let intervalId = null;

const setBodyRandomBg = () => {
  body.style.backgroundColor = getRandomHexColor();
};

startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);
stopBtn.setAttribute(DISABLED, true);

function onStartBtnClick() {
  startBtn.setAttribute(DISABLED, true);
  stopBtn.removeAttribute(DISABLED);
  intervalId = setInterval(() => {
    setBodyRandomBg();
  }, 1000);
}
function onStopBtnClick() {
  startBtn.removeAttribute(DISABLED);
  stopBtn.setAttribute(DISABLED, true);
  clearInterval(intervalId);
}
