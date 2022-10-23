const keys = document.querySelectorAll(".key")
const whites = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'];
const blacks = ['w', 'e', 'r', 't', 'y', 'u', 'i'];
const regulars = document.querySelectorAll('.white-key');
const sharps = document.querySelectorAll('.black-key');

keys.forEach(function (key) {
    key.addEventListener("click", function () {
        playNote(key);

    });
});

let playNote = function (key) {
    noteSound = document.getElementById(key.dataset.note);
    noteSound.currentTime = 0;
    noteSound.play();
    key.classList.add("active");
    noteSound.addEventListener("ended", function () {
        key.classList.remove("active");
    })
};

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;
    const key = e.key;
    const whiteKeyIndex = whites.indexOf(key);
    const blackKeyIndex = blacks.indexOf(key);

    if (whiteKeyIndex > -1) playNote(regulars[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(sharps[blackKeyIndex]);
});

const date = new Date();
const year = date.getFullYear();
console.log(year);
document.getElementById("date").innerHTML = "Copyright © " + year + " Aryan";