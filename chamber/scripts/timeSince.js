const msToDays = 86400000;

let message = document.getElementById("time-since");

let timeSince = window.localStorage.getItem("timesince");

if (timeSince === null) {
    message.textContent = "Welcome! Let us know if you have any questions."
    window.localStorage.setItem("timesince", Date.now());
} else {
    let timeNow = Date.now();
    let timeNowFull = new Date(timeNow);
    let timeSinceFull = new Date(parseInt(timeSince));

    if (timeNowFull.getFullYear() === timeSinceFull.getFullYear() && timeNowFull.getMonth() === timeSinceFull.getMonth() && timeNowFull.getDate() === timeSinceFull.getDate()) {

        message.textContent = "Back so soon! Awesome!"
        window.localStorage.setItem("timesince", timeNow);

    } else {
        console.log("yey");
        let daysSince = (timeNow - timeSince) / msToDays;
        console.log(daysSince);

        if (daysSince.toFixed(0) == 1) {
            message.textContent = `You last visited ${daysSince.toFixed(0)} day ago.`;
            window.localStorage.setItem("timesince", timeNow);
        } else {
            message.textContent = `You last visited ${daysSince.toFixed(0)} days ago.`;
            window.localStorage.setItem("timesince", timeNow);
        }
    }


}
