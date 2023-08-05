import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

import { Notify } from 'notiflix/build/notiflix-notify-aio';


const refs = {
    startButton: document.querySelector('[data-start]'),
    timer_days: document.querySelector('[data-days]'),
    timer_hours: document.querySelector('[data-hours]'),
    timer_minutes: document.querySelector('[data-minutes]'),
    timer_seconds: document.querySelector('[data-seconds]'),
};


refs.startButton.disabled = true;

let timer = null;


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        const currentDate = new Date();

        const targetDate = selectedDates[0];

        if (targetDate - currentDate < 0) {
            // window.alert('Please choose a date in the future');
            Notify.failure('Please choose a date in the future', {
                timeout: 1500,
                width: '350px',
              });
        } else {
            refs.startButton.disabled = false;
        }
    },
};

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
  


function addLeadingZero(value) {
    return String(value).padStart(2, 0);
  }

function onStartClick() {

    const selectedDate = datePick.selectedDates[0];

    timer = setInterval(() => {
        const startTime = new Date();
        const diff = selectedDate - startTime;

        if(diff < 0){
            clearInterval(timer);
            return;
        }
        updateTimerFace(convertMs(diff));

    }, 1000);
}

function updateTimerFace({ days, hours, minutes, seconds }) {
    refs.timer_days.textContent = addLeadingZero(days);
    refs.timer_hours.textContent = addLeadingZero(hours);
    refs.timer_minutes.textContent = addLeadingZero(minutes);
    refs.timer_seconds.textContent = addLeadingZero(seconds);
}

const datePick = flatpickr('#datetime-picker', options);

refs.startButton.addEventListener('click', onStartClick);


