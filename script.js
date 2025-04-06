let hours = document.getElementById("hour");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");

let reset = document.getElementById("reset");
let star = document.getElementById("star");
let pause = document.getElementById("pause");
let clearBtn = document.getElementById("clear");

let hitoryContainer = document.querySelector(".history");

let sec = 0;
let min = 0;
let hour = 0;

let contHitrory = 0;

let interval;

star.addEventListener("click", starChrono);
reset.addEventListener("click", resetChrono);
pause.addEventListener("click", pauseChrono);
clearBtn.addEventListener("click", clearChrono);

function starChrono() {
    interval = setInterval(timer, 1000);
}

function timer() {
    if (sec < 59) {
        sec++;
        if (sec < 10) {
            secs.innerText = `:0${sec}s`;
        } else {
            secs.innerText = `:${sec}s`;
        }
    } else if (min < 59) {
        sec = 0;
        min++;
        if (min < 10) {
            mins.innerText = `:0${min}`;
        } else {
            mins.innerText = `:${min}`;
        }
    } else if (hour < 23) {
        sec = 0;
        min = 0;
        hour++;
        if (hour < 10) {
            hours.innerText = ` 0${hour}`;
        } else {
            hours.innerText = ` ${hour}`;
        }
    }
}
// starChrono();

function resetChrono() {
    min = 0;
    sec = 0;
    hour = 0;
    secs.innerText = `: 00`;
    mins.innerText = `: 00`;
    hours.innerText = ` 00`;
    clearInterval(interval);
}
function clearChrono() {
    clearInterval(interval);
    resetChrono();
    hitoryContainer.innerHTML = "";
    contHitrory = 0;
}
function pauseChrono() {
    clearInterval(interval);
    let timePause = document.createElement("p");
    // timePause.textContent = `${hours.innerText}${mins.innerText}${secs.innerText}`;
    let texts = document.createTextNode(
        `${hours.innerText}${mins.innerText}${secs.innerText}`
    );

    contHitrory++;
    let spanCont = document.createElement("span");
    let spanText = document.createTextNode(`#${contHitrory}: `);
    spanCont.appendChild(spanText);
    timePause.appendChild(spanCont);
    timePause.appendChild(texts);

    hitoryContainer.appendChild(timePause);
    console.log(hitoryContainer.children.length);
    if (hitoryContainer.children.length > 5) {
        console.log(hitoryContainer.children[0].remove());
    }
}
