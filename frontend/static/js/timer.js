// let div = document.createElement('div');
// div.className = 'stopWatch';
// div = '00:00:00';
// document.body.append(div);

let [seconds, minutes, hours] = [0, 0, 0];
let watch = document.querySelector('.stopWatch');
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    watch.innerHTML = hours + ':' + minutes + ':' + seconds;
}

function watchStart() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

document.addEventListener('DOMContentLoaded', watchStart);