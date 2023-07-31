let firstNum = 0;
let secondNum;
let operator;
let displayVal = "";
let result;

function add(firstNum, secondNum) {
    return firstNum + secondNum;
}

function subtract(firstNum, secondNum) {
    return firstNum - secondNum;
}

function multiply(firstNum, secondNum) {
    return firstNum * secondNum;
}

function divide(firstNum, secondNum) {
    return firstNum / secondNum
}

function operate(operator, firstNum, secondNum) {
    if (operator === "+") {
        return add(firstNum, secondNum);
    } else if (operator === "-") {
        return subtract(firstNum, secondNum);
    } else if (operator === "*") {
        return multiply(firstNum, secondNum);
    } else if (operator === "/") {
        return divide(firstNum, secondNum);
    }
}

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

const calculatorDisplay = document.getElementById("calculator-display");
const inputDisplay = document.getElementById("input-display");

numZeroButton.addEventListener("click", () => {
    inputDisplay.textContent += "0";
    displayVal += "0";
})

numOneButton.addEventListener("click", () => {
    inputDisplay.textContent += "1";
    displayVal += "1";
})

numTwoButton.addEventListener("click", () => {
    inputDisplay.textContent += "2";
    displayVal += "2";
})

numThreeButton.addEventListener("click", () => {
    inputDisplay.textContent += "3";
    displayVal += "3";
})

numFourButton.addEventListener("click", () => {
    inputDisplay.textContent += "4";
    displayVal += "4";
})

numFiveButton.addEventListener("click", () => {
    inputDisplay.textContent += "5";
    displayVal += "5";
})

numSixButton.addEventListener("click", () => {
    inputDisplay.textContent += "6";
    displayVal += "6";
})

numSevenButton.addEventListener("click", () => {
    inputDisplay.textContent += "7";
    displayVal += "7";
})

numEightButton.addEventListener("click", () => {
    inputDisplay.textContent += "8";
    displayVal += "8";
})

numNineButton.addEventListener("click", () => {
    inputDisplay.textContent += "9";
    displayVal += "9";
})

const addButton = document.getElementById("addition");
const subtractButton = document.getElementById("subtraction");
const multiplyButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const equalsButton = document.getElementById("equals");

addButton.addEventListener("click", () => {
    if (displayVal === "" && secondNum === undefined) {
        return;
    } else if (firstNum === result){
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum);
        firstNum = result;
        displayVal = ""
        secondNum = undefined
        console.log("no");
    } else {
        firstNum = Number(displayVal);
        operator = "+";
        result = firstNum;
        displayVal = "";
    }
})

equalsButton.addEventListener("click", () => {
    
})