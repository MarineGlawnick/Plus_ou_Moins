
function getRandomNumber(maxNumber): number{
return Math.floor(Math.random() * (maxNumber + 1));
}
const solution = getRandomNumber(100);
console.log(solution)