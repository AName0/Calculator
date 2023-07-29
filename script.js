let num1;
let num2;
let operator;

const calculatorDisplay = document.getElementById("calculator-display")

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