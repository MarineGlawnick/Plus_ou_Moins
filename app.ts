const randomNumb: number = Math.floor(Math.random() * 100) + 1;

const input = document.getElementById('input') as HTMLInputElement | null;

let guessCount = 0;

function guessNumber() {
    const guess: number = parseInt(input.value)

    if (guess === randomNumb) {
        answer.textContent = 'bien joué'
    } else if (guess < randomNumb) {
        answer.textContent = "plus haut"
        guessCount ++;
    } else if (guess > randomNumb) {
        answer.textContent = "plus bas"
        guessCount++;
    }
    tries.textContent = "Essais: " + guessCount;
}

function triesCounter() {
}

function reset() {
    window.location.reload();
}