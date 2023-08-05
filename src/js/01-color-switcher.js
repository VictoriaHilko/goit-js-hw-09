import throttle from "lodash.throttle";


let interval;

const refs = {
    start_button: document.querySelector("[data-start]"),
    stop_button: document.querySelector("[data-stop]"),
    body: document.querySelector("body"),
};


function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

refs.start_button.addEventListener('click', onStartClick);
refs.stop_button.addEventListener('click', onStopClick);

function onStartClick() {
    interval = setInterval(() => {
        refs.body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    
    refs.start_button.disabled = true; 

}

function onStopClick() {
    clearInterval(interval);

    refs.start_button.disabled = false;
}

