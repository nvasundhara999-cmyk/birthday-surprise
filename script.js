function nextPage(pageNumber){
    document.querySelector(".active").classList.remove("active");
    document.getElementById("page" + pageNumber).classList.add("active");
}

/* popup + confetti */
function showPopup(){
    document.getElementById("popup").classList.add("active");

    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
    });
}

function closePopup(){
    document.getElementById("popup").classList.remove("active");
}
function updateCountdown(){
    const targetDate = new Date("January 7, 2027 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = targetDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("countdown").innerHTML =
        `⏳ ${days}d ${hours}h ${minutes}m left`;
}

setInterval(updateCountdown, 1000);
updateCountdown();