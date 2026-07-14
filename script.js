const cards = document.querySelectorAll(".card");
const safeIndex = Math.floor(Math.random() * cards.length);

console.log("Safe card:", safeIndex);

let gameOver = false;

cards.forEach((card, index) => {
    const back = card.querySelector(".back");

    if (index === safeIndex) {
        back.style.backgroundImage = "url('assets/won.png')";
    } else {
        back.style.backgroundImage = "url('assets/card.png')";
    }
});


cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        if (gameOver) return;
        gameOver = true;

        cards.forEach(c => {
            c.style.pointerEvents = "none";
        });

        card.classList.add("flipped");

        setTimeout(() => {

            if (index === safeIndex) {

                retryScreen.classList.add("show");


            } else {

                window.location.href = "looser.html";

            }

        }, 2600);

    });

});

const retryScreen = document.getElementById("retryScreen");
const retryBtn = document.getElementById("retryBtn");

retryBtn.addEventListener("click", () => {
    location.reload();
});