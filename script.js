let num1;
let num2;
let operator;
let display;

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, num2, operator) {
    if (operator === "+") {
        return add(num1, num2);
    } else if (operator === "-") {
        return subtract(num1, num2);
    } else if (operator === "*") {
        return multiply(num1, num2);
    } else if (operator === "/") {
        return divide(num1, num2);
    }
}

const calculatorDisplay = document.getElementById("calculator-display");
const numZeroButton = document.getElementById("number-zero");
const numOneButton = document.getElementById("number-one");
const numTwoButton = document.getElementById("number-two");
const numThreeButton = document.getElementById("number-three");
const numFourButton = document.getElementById("number-four");
const numFiveButton = document.getElementById("number-five");
const numSixButton = document.getElementById("number-six");
const numSevenButton = document.getElementById("number-seven");
const numEightButton = document.getElementById("number-eight");
const numNineButton = document.getElementById("number-nine");

function displayNumZero() {
    calculatorDisplay.textContent += "0";
}

function displayNumOne() {
    calculatorDisplay.textContent += "1";
}

function displayNumTwo() {
    calculatorDisplay.textContent += "2";
}

function displayNumThree() {
    calculatorDisplay.textContent += "3";
}

function displayNumFour() {
    calculatorDisplay.textContent += "4";
}

function displayNumFive() {
    calculatorDisplay.textContent += "5";
}

function displayNumSix() {
    calculatorDisplay.textContent += "6";
}

function displayNumSeven() {
    calculatorDisplay.textContent += "7";
}

function displayNumEight() {
    calculatorDisplay.textContent += "8";
}

function displayNumNine() {
    calculatorDisplay.textContent += "9";
}

numZeroButton.addEventListener("click", displayNumZero);
numOneButton.addEventListener("click", displayNumOne);
numTwoButton.addEventListener("click", displayNumTwo);
numThreeButton.addEventListener("click", displayNumThree);
numFourButton.addEventListener("click", displayNumFour);
numFiveButton.addEventListener("click", displayNumFive);
numSixButton.addEventListener("click", displayNumSix);
numSevenButton.addEventListener("click", displayNumSeven);
numEightButton.addEventListener("click", displayNumEight);
numNineButton.addEventListener("click", displayNumNine);