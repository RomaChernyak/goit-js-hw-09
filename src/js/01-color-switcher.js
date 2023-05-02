const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
const CHANGE_COLOR_DELAY = 1000;

let intervalId = null;
let isBtnActive = startBtn.disabled = false;
let isBtnDisable = stopBtn.disabled = true;


startBtn.addEventListener('click', onStartBtnClick);
stopBtn.addEventListener('click', onStopBtnClick);


function onStartBtnClick() {
    if (isBtnActive) {
        return;
    };
    
    isBtnActive = startBtn.disabled = true;
    isBtnDisable = stopBtn.disabled = false;
    
    intervalId = setInterval(callbackSetColor, CHANGE_COLOR_DELAY);
};

function onStopBtnClick() {
    isBtnActive = startBtn.disabled = false;
    isBtnDisable = stopBtn.disabled = true;

    clearInterval(intervalId);
};

function callbackSetColor() {
    return body.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}


// 2й спосіб (відмінність лише в способі додавання до елемента атрибуту disabled)
// const body = document.querySelector('body');
// const startBtn = document.querySelector('[data-start]');
// const stopBtn = document.querySelector('[data-stop]');
// const CHANGE_COLOR_DELAY = 1000;
// let intervalId = null;

// startBtn.addEventListener('click', onStartBtnClick);
// stopBtn.addEventListener('click', onStopBtnClick);

// stopBtn.setAttribute('disabled', '');

// function onStartBtnClick() {
//     if (startBtn.hasAttribute('disabled')) {
//         return;
//     };
    
//     stopBtn.removeAttribute('disabled');
//     startBtn.setAttribute('disabled', '');
    
//     intervalId = setInterval(callbackSetColor, CHANGE_COLOR_DELAY);
// };

// function onStopBtnClick() {
//     startBtn.removeAttribute('disabled');
//     stopBtn.setAttribute('disabled', '');

//     clearInterval(intervalId);
// };

// function callbackSetColor() {
//     return body.style.backgroundColor = getRandomHexColor();
// }

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
// }