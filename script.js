/* ========================================
   TERMINAL TYPING ANIMATION
======================================== */

const typedText = document.getElementById("typed-text");

const words = [
    "programming.",
    "music.",
    "technology.",
    "making things.",
    "the internet."
];

let wordIndex = 0;
let characterIndex = 0;
let deleting = false;


function type() {

    const word = words[wordIndex];

    if (!deleting) {

        typedText.textContent =
            word.substring(0, characterIndex + 1);

        characterIndex++;

        if (characterIndex === word.length) {

            deleting = true;

            setTimeout(type, 1400);

            return;
        }

    } else {

        typedText.textContent =
            word.substring(0, characterIndex - 1);

        characterIndex--;

        if (characterIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        type,
        deleting ? 45 : 75
    );
}


type();