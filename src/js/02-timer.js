import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const input = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const secondsSpan = document.querySelector('[data-seconds]');
const minutesSpan = document.querySelector('[data-minutes]');
const hoursSpan = document.querySelector('[data-hours]');
const daysSpan = document.querySelector('[data-days]');
let intervalId = null;
startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < new Date()) {
      Notiflix.Notify.failure('Please, choose a date in the future!');
      return;
    }
    startBtn.disabled = false;

    startBtn.addEventListener('click', () => {
      startBtn.disabled = true;

      intervalId = setInterval(() => {
        const timeDifference = selectedDates[0] - new Date();
        const convertation = convertMs(timeDifference);

        if (timeDifference < 1000) {
          clearInterval(intervalId);
          console.log(timeDifference);
        }

        timerFace(convertation);
      }, 1000);
    });
  },
};

flatpickr(input, options);

function timerFace({ days, hours, minutes, seconds }) {
  secondsSpan.textContent = addLeadingZero(`${seconds}`);
  minutesSpan.textContent = addLeadingZero(`${minutes}`);
  hoursSpan.textContent = addLeadingZero(`${hours}`);
  daysSpan.textContent = addLeadingZero(`${days}`);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
