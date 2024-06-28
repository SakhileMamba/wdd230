let visits = document.getElementById("pageVisits");

if (window.localStorage.getItem("visits")) {
    let current = parseInt(window.localStorage.getItem("visits"));
    window.localStorage.setItem("visits", String(current +1));
    visits.textContent = window.localStorage.getItem("visits")
} else {
    window.localStorage.setItem("visits", String(1));
    visits.textContent = window.localStorage.getItem("visits")
}

