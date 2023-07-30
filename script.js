let num1;
let num2;
let operator;
let displayVal = "";

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
    if (displayVal !== "") {
        calculatorDisplay.textContent += "0";
    displayVal += "0";
    } else {
        return;
    }
}

function displayNumOne() {
    calculatorDisplay.textContent += "1";
    displayVal += "1";
}

function displayNumTwo() {
    calculatorDisplay.textContent += "2";
    displayVal += "2";
}

function displayNumThree() {
    calculatorDisplay.textContent += "3";
    displayVal += "3";
}

function displayNumFour() {
    calculatorDisplay.textContent += "4";
    displayVal += "4";
}

function displayNumFive() {
    calculatorDisplay.textContent += "5";
    displayVal += "5";
}

function displayNumSix() {
    calculatorDisplay.textContent += "6";
    displayVal += "6";
}

function displayNumSeven() {
    calculatorDisplay.textContent += "7";
    displayVal += "7";
}

function displayNumEight() {
    calculatorDisplay.textContent += "8";
    displayVal += "8";
}

function displayNumNine() {
    calculatorDisplay.textContent += "9";
    displayVal += "9";
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

const addButton = document.getElementById("addition");
const subtractButton = document.getElementById("subtraction");
const multiplyButton = document.getElementById("multiplication");
const divideButton = document.getElementById("division");
const equalsButton = document.getElementById("equals");

addButton.addEventListener("click", () => {
    if (operator === "+") {
        return;
    } else if (operate(num1, Number(displayVal),operator) !== undefined & displayVal !== "") {
        num1 = operate(num1,Number(displayVal),operator);
        displayVal = "";
        operator = "+";
        calculatorDisplay.textContent = `${num1} ${operator} `;
    } else {
        num1 = Number(displayVal);
        displayVal = "";
        operator = "+";
        calculatorDisplay.textContent = `${num1} ${operator} `;
        console.log(typeof operate(num1,Number(displayVal),operator));
    }
})

subtractButton.addEventListener("click", () => {
    if (operator === "-" || displayVal === "") {
        return;
    } else if (operate(num1, Number(displayVal),operator) !== undefined & displayVal !== "") {
        num1 = operate(num1,Number(displayVal),operator);
        displayVal = "";
        operator = "-";
        calculatorDisplay.textContent = `${num1} ${operator} `;
    } else {
        num1 = Number(displayVal);
        displayVal = "";
        operator = "-";
        calculatorDisplay.textContent = `${num1} ${operator} `;
        console.log(typeof operate(num1,Number(displayVal),operator));
    }
})

multiplyButton.addEventListener("click", () => {
    if (operator === "*" || displayVal === "") {
        return;
    } else if (operate(num1, Number(displayVal),operator) !== undefined & displayVal !== "") {
        num1 = operate(num1,Number(displayVal),operator);
        displayVal = "";
        operator = "*";
        calculatorDisplay.textContent = `${num1} ${operator} `;
    } else {
        num1 = Number(displayVal);
        displayVal = "";
        operator = "*";
        calculatorDisplay.textContent = `${num1} ${operator} `;
        console.log(typeof operate(num1,Number(displayVal),operator));
    }
})

divideButton.addEventListener("click", () => {
    if (operator === "/" || displayVal === "") {
        return;
    } else if (operate(num1, Number(displayVal),operator) !== undefined & displayVal !== "") {
        num1 = operate(num1,Number(displayVal),operator);
        displayVal = "";
        operator = "/";
        calculatorDisplay.textContent = `${num1} ${operator} `;
    } else {
        num1 = Number(displayVal);
        displayVal = "";
        operator = "/";
        calculatorDisplay.textContent = `${num1} ${operator} `;
        console.log(typeof operate(num1,Number(displayVal),operator));
    }
})

equalsButton.addEventListener("click", () => {
    result = operate(num1,Number(displayVal),operator);
    num1 = result;
    displayVal = "";
    operator = "";
    calculatorDisplay.textContent = result;
})