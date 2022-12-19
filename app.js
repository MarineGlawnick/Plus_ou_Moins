var randomNumb = Math.floor(Math.random() * 100) + 1;
var input = document.getElementById('input');
var guessCount = 0;
function guessNumber() {
    var guess = parseInt(input.value);
    if (guess === randomNumb) {
        answer.textContent = 'bien joué';
    }
    else if (guess < randomNumb) {
        answer.textContent = "plus haut";
        guessCount++;
    }
    else if (guess > randomNumb) {
        answer.textContent = "plus bas";
        guessCount++;
    }
    tries.textContent = "essais: " + guessCount;
}
function triesCounter() {
}
function reset() {
    window.location.reload();
}
