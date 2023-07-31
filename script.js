let firstNum;
let secondNum;
let operator;
let displayVal = "";
let result = 0;
let equalsButtonUsed = false;

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
inputDisplay.textContent = "0";

numZeroButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        return;
    } else {
        inputDisplay.textContent += "0";
        displayVal += "0";
    }
})

numOneButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "1";
        displayVal += "1"
    } else {
        inputDisplay.textContent += "1";
        displayVal += "1";
    }
})

numTwoButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "2";
        displayVal += "2"
    } else {
        inputDisplay.textContent += "2";
        displayVal += "2";
    }
})

numThreeButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "3";
        displayVal += "3"
    } else {
        inputDisplay.textContent += "3";
        displayVal += "3";
    }
})

numFourButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "4";
        displayVal += "4"
    } else {
        inputDisplay.textContent += "4";
        displayVal += "4";
    }
})

numFiveButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "5";
        displayVal += "5"
    } else {
        inputDisplay.textContent += "5";
        displayVal += "5";
    }
})

numSixButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "6";
        displayVal += "6"
    } else {
        inputDisplay.textContent += "6";
        displayVal += "6";
    }
})

numSevenButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "7";
        displayVal += "7"
    } else {
        inputDisplay.textContent += "7";
        displayVal += "7";
    }
})

numEightButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "8";
        displayVal += "8"
    } else {
        inputDisplay.textContent += "8";
        displayVal += "8";
    }
})

numNineButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "9";
        displayVal += "9"
    } else {
        inputDisplay.textContent += "9";
        displayVal += "9";
    }
})

const addButton = document.getElementById("addition");
const subtractButton = document.getElementById("subtraction");
const multiplyButton = document.getElementById("multiplication");
const divisionButton = document.getElementById("division");
const equalsButton = document.getElementById("equals");

addButton.addEventListener("click", () => {
    if (equalsButtonUsed === true) {
        operator = "+";
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
    } else if (displayVal === "" && secondNum === undefined) {
        console.log("add impossible");
        return;
    } else if (firstNum === result && displayVal !== ""){
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum);
        firstNum = result;
        displayVal = "";
        operator = "+";
        secondNum = undefined;
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("add numbers, operator is still addition");
    } else {
        firstNum = Number(displayVal);
        operator = "+";
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("oop");
    }
})

equalsButton.addEventListener("click", () => {
    if (displayVal === "") {
        console.log("equals not possible")
        return;
    } else {
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum)
        firstNum = result;
        displayVal = "";
        operator = undefined;
        secondNum = undefined;
        equalsButtonUsed = true;
        calculatorDisplay.textContent = `${firstNum}`;
        inputDisplay.textContent = `${firstNum}`;
    }
})