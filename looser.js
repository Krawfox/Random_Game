
const poem = `
One card carried hope.
Eight carried defeat.
The odds stood beside you,
quietly whispering,
"This way."
You listened instead
to confidence.
Nine choices.
One victory.
Somehow,
you found the only path
that led here.
The winning card
waited patiently.
It never expected
to meet you.
Probability offered
an eleven percent chance.
You preferred
the other eighty-nine.
Remarkable.
Refresh the page.
Perhaps statistics
will forgive you.
`;

const speed = 20;

const text = document.getElementById("text");
const retry = document.getElementById("retry");

let i = 0;

function typeWriter(){

    if(i < poem.length){

        text.innerHTML =
            poem.substring(0,i) +
            '<span class="cursor">|</span>';

        i++;

        setTimeout(typeWriter,speed);

    }else{

        text.innerHTML = poem;

        retry.style.display="inline-block";

    }

}

typeWriter();
const fakeRetry = document.querySelector(".retry_fake");

fakeRetry.addEventListener("click", (e) => {
    e.preventDefault();

    alert("Your luck is shit.\nAura -999 💀");

    window.open(
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "_blank"
    );
});