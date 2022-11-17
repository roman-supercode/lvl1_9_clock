// Zeige eine Uhr, die mit einem Timing-Event erstellt wurde.
const output = document.getElementById("txt");
const outputDate = document.querySelector(".date");

function startTime() {
    const date = new Date();
    // const heute = date.getDate();
    const std = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    // const monat = date.getMonth();
    const monat = date.toLocaleString("de-DE", { day: "numeric", month: "2-digit", year: "numeric" });
    // const jahr = date.getFullYear();

    const pm = "PM";
    const am = "AM";
    const pmam = std >= 12 ? pm : am;

    output.innerHTML = `${std}:${min}:${sec} ${pmam}`;
    outputDate.innerHTML = `${monat}`;
};

setInterval(startTime, 1000);
// startTime();


// const monat = date.getMonth(), wegen der Indexierung wird der falsche Monat ausgegeben
// const monat = date.toLocale.String("default", {monat: "long"})
// https://stackoverflow.com/questions/1643320/get-month-name-from-date/18648314#18648314