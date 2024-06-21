let date = new Date(Date.now()).getFullYear();
document.getElementById("year").innerText = date;

document.getElementById("lastModified").innerText = `Last modified: ${document.lastModified}`;

const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('open');
    document.querySelector('nav').classList.toggle('open');
})



const modeButton = document.querySelector("#mode");
const main = document.querySelector("main");
const sections = document.querySelectorAll("section");
const heads = document.querySelector("h1");

let mql = window.matchMedia("(max-width: 600px)");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("🌒")) {
        main.style.background = "#000";
        main.style.color = "#fff";
        modeButton.textContent = "☀️";

        sections.forEach((section) => {
            section.style.border = "1px solid white"
        })


        if (mql.matches) {
            heads.style.paddingTop = "21.44px";
        }


    } else {
        main.style.background = "#fff";
        main.style.color = "#000";
        sections.forEach((section) => {
            section.style.border = "1px solid black"
        })

        if (mql.matches) {
            heads.style.paddingTop = "0px";
        }

        modeButton.textContent = "🌒";
    }
});