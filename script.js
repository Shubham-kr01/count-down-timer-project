const days = document.querySelector("#days span");
days.innerHTML = "00";
const hours = document.querySelector("#hours span");
hours.innerHTML = "00";
const minutes = document.querySelector("#minutes span");
minutes.innerHTML = "00";
const seconds = document.querySelector("#seconds span");
seconds.innerHTML = "00";

// const currentDate = new Date();
// console.log(currentDate);

// const targetDate = new Date ("01 Jan 2027");
// console.log(targetDate);

// const remainingDate = targetDate - currentDate;
// console.log(remainingDate);

// const requiredDays = remainingDate / 1000 / 60 / 60 / 24;
// console.log(requiredDays);

// const floorDays = Math.floor(requiredDays);
// console.log(floorDays);

// days.innerHTML = floorDays;

// const requiredHours = (requiredDays - floorDays) * 24;
// console.log(requiredHours);

// const floorHours = Math.floor(requiredHours);
// console.log(floorHours);

// hours.innerHTML = floorHours;

// const requiredMinutes = (requiredHours - floorHours) * 60;
// console.log(requiredMinutes);

// const floorMinutes = Math.floor(requiredMinutes);
// console.log(floorMinutes);

// minutes.innerHTML = floorMinutes;

// const requiredSeconds = (requiredMinutes - floorMinutes) * 60;
// console.log(requiredSeconds);

// const floorSeconds = Math.floor(requiredSeconds);
// console.log(floorSeconds);

// seconds.innerHTML = floorSeconds;

function updateCountdown() {
    const currentDate = new Date();
    const targetDate = new Date ("01 Jan 2027");
    const remainingDate = targetDate - currentDate;
    const requiredDays = remainingDate / 1000 / 60 / 60 / 24;
    const floorDays = Math.floor(requiredDays);
    days.innerHTML = floorDays;
    const requiredHours = (requiredDays - floorDays) * 24;
    const floorHours = Math.floor(requiredHours);
    hours.innerHTML = floorHours;
    const requiredMinutes = (requiredHours - floorHours) * 60;
    const floorMinutes = Math.floor(requiredMinutes);
    minutes.innerHTML = floorMinutes;
    const requiredSeconds = (requiredMinutes - floorMinutes) * 60;
    const floorSeconds = Math.floor(requiredSeconds);
    seconds.innerHTML = floorSeconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// progress bar

// const startDate = new Date ("01 Jan 2026");

// const totalTime = new Date ("01 Jan 2027") - startDate;
// const leftTime = new Date ("01 Jan 2027") - new Date();

// const progess = ((totalTime - leftTime) / totalTime) * 100;
// console.log(progess);
// const floorProgess = Math.floor(progess);
// console.log(floorProgess);

// document,getElementByClassName ("progress-bar").innerHTML = floorProgess;

function updateProgress() {
    const startDate = new Date ("01 Jan 2026");
    const totalTime = new Date ("01 Jan 2027") - startDate;
    const leftTime = new Date ("01 Jan 2027") - new Date();
    const progess = ((totalTime - leftTime) / totalTime) * 100;
    const floorProgess = Math.floor(progess);
    document.querySelector (".progress-fill").style.width = floorProgess + "%";
    console.log(floorProgess);

}

updateProgress();
setInterval(updateProgress, 1000);
