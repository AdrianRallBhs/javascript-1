document.querySelector('#submit').addEventListener('click', ausgabeZufallszahl);

let randomNumberMin = 1,
    randomNumberMax = 10;

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ausgabeZufallszahl() {
    document.querySelector('output').innerText = rand(randomNumberMin, randomNumberMax);
}