// Zeige eine Uhr, die mit einem Timing-Event erstellt wurde.
const output = document.getElementById("txt");
const outputDate = document.querySelector(".date");

function startTime() {
    const date = new Date();
    const heute = date.getDate();
    const std = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const monat = date.getMonth();
    const jahr = date.getFullYear();

    const pm = "PM";
    const am = "AM";
    const pmam = std >= 12 ? pm : am;

    output.innerHTML = `${std}:${min}:${sec} ${pmam}`;
    outputDate.innerHTML = `${heute}-${monat}-${jahr}`;
    console.log(heute, std, min, sec);
};

setInterval(startTime, 1000);
// startTime();