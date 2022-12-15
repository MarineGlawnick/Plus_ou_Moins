const randomNumb: number = Math.floor(Math.random() * 100) + 1;
console.log(randomNumb)

const input = document.getElementById('input') as HTMLInputElement | null;


function guessNumber() {
    const guess: number = parseInt(input.value)
    console.log(typeof guess)

    if (guess === randomNumb) {
        answer.textContent = 'bien joué'
    } else if (guess < randomNumb) {
        answer.textContent = "plus haut"
    } else if (guess > randomNumb) {
        answer.textContent = "plus bas"
    }
}
submitNumb.addEventListener('click', guessNumber())


function reset() {
    window.location.reload();
}