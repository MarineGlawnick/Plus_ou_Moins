var randomNumb = Math.floor(Math.random() * 100) + 1;
console.log(randomNumb);
var input = document.getElementById('input');
function guessNumber() {
    var guess = parseInt(input.value);
    console.log(typeof guess);
    if (guess === randomNumb) {
        answer.textContent = 'bien joué';
    }
    else if (guess < randomNumb) {
        answer.textContent = "plus haut";
    }
    else if (guess > randomNumb) {
        answer.textContent = "plus bas";
    }
}
submitNumb.addEventListener('click', guessNumber());
function reset() {
    window.location.reload();
}
