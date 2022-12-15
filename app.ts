const randomNumb: number = Math.floor(Math.random() * 100) + 1;
console.log(randomNumb)
function guessNumber() {
    const guess: number = +guessField.value
    console.log(guess)
    if (guess === randomNumb) {
        answer.textContent = 'bien joué'
        console.log('bien joué')
    } else{
        answer.textContent = "à vous de jouer"
        console.log('à vous de jouer')
    }
}
guessSubmit.addEventListener('click', guessNumber())