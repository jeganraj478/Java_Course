let count = document.querySelector("#attemptCount");
let textBox = document.querySelector("#textBox");
let Box = document.querySelector("#float-right");
let inputBox = document.querySelector("#input-box");
let winningBox = document.querySelector("#winning-box");
let losingBox = document.querySelector("#losing-box");
let guess = document.querySelector("#guess");

let attemptcount = 10;
let random = Math.floor((Math.random() * 100) + 1);

let GuessTheNum = () => {
    console.log(textBox.value);
    if (textBox.value !== "") {

        if (attemptcount == 1) {

            losingBox.setAttribute('style', 'display:block;');
            Box.setAttribute('style', 'display:none;');
            inputBox.setAttribute('style', 'display:none;');
            guess.setAttribute('style', 'display:none;');

        }
        if (textBox.value == random) {

            winningBox.setAttribute('style', 'display:block;');
            Box.setAttribute('style', 'display:none;');
            inputBox.setAttribute('style', 'display:none;');
            guess.setAttribute('style', 'display:none;');
        }
        else if (random > textBox.value) {

            guess.innerHTML = "GUESSED NUMBER IS SMALL";

        }
        else {

            guess.innerHTML = "GUESSED NUMBER IS BIG";

        }

        attemptcount--;
        count.innerHTML = attemptcount;
        textBox.value = "";
    }
};