function compareNumbers (firstNumber, SecondNumber) {
    if (firstNumber < SecondNumber) {
        returntrue;
    } else if (firstNumber > secondNumber) {
        return false;
    } else {
        return -1;
    }
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));