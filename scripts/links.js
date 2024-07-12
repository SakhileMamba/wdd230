const baseURL = "https://sakhilemamba.github.io/wdd230/";

// const linksURL = "https://sakhilemamba.github.io/wdd230/data/links.json";

const linksURL = `${baseURL}/data/links.json`;

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data);
}

function displayLinks(weeks) {
    let linksList = document.querySelector("section.first>ul");


    for (let i = 0; i < weeks.weeks.length; i++) {

        let linkRow = document.createElement("li");
        linkRow.textContent = `${weeks.weeks[i].week}: `;

        for (let j = 0; j < weeks.weeks[i].links.length; j++) {
            let link = document.createElement("a");
            link.setAttribute("href", weeks.weeks[i].links[j].url);
            link.textContent = weeks.weeks[i].links[j].title;

            if (j == 0) {
                linkRow.appendChild(link);
            } else {
                linkRow.innerHTML += " | ";
                linkRow.appendChild(link)
            }

        }

        linksList.appendChild(linkRow);
    }
}


getLinks();