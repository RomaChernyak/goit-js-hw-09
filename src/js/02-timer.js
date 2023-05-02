import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const refs = {
    dateTimePickerInput: document.querySelector('#datetime-picker'),
    startBtn: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    mins: document.querySelector('[data-minutes]'),
    secs: document.querySelector('[data-seconds]'),
}

refs.startBtn.disabled = true;

let intervalId = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose([selectedDates]) {
        if (options.defaultDate < selectedDates) {
            refs.startBtn.disabled = false;
        } else {
            refs.startBtn.disabled = true;
            Notiflix.Notify.failure('Please choose a date in the future');
        }
    },
};

flatpickr(refs.dateTimePickerInput, options);


function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

    return { days, hours, minutes, seconds };
};

function addLeadingZero(value) {
    return String(value).padStart(2, '0');
};

const clickBtnStart = () => {
    refs.dateTimePickerInput.disabled = true;
    refs.startBtn.disabled = true;
    intervalId = setInterval(() => {
        const settledTimeDate = new Date(refs.dateTimePickerInput.value);
        const countdown = settledTimeDate - new Date();
        const { days, hours, minutes, seconds } = convertMs(countdown);
        
        refs.days.textContent = `${days}`;
        refs.hours.textContent = `${hours}`;
        refs.mins.textContent = `${minutes}`;
        refs.secs.textContent = `${seconds}`;

        if (refs.seconds.textContent === '00') {
            clearInterval(intervalId);
            refs.dateTimePickerInput.disabled = false;
        }
    }, 1000);
};



refs.startBtn.addEventListener('click', clickBtnStart);
