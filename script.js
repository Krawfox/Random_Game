const cards = document.querySelectorAll(".card");

const safeIndex = Math.floor(Math.random() * cards.length);

console.log(safeIndex);

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // Flip the clicked card
        card.classList.add("flipped");

        setTimeout(() => {

            if (index === safeIndex) {
                alert("You found the safe card!");
            } else {
                window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
            }

        }, 2600);

    });

});