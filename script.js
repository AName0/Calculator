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

function reset() {
    firstNum = undefined;
    secondNum = undefined;
    operator = undefined;
    result = 0;
    equalsButtonUsed = false;
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
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "0";
        displayVal = "";
        reset();
        console.log("reset using zero button");
    } else {
        inputDisplay.textContent += "0";
        displayVal += "0";
    }
})

numOneButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "1";
        displayVal += "1";
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "1";
        displayVal = "1";
        reset();
        console.log("reset input num 1");
    } else {
        inputDisplay.textContent += "1";
        displayVal += "1";
    }
})

numTwoButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "2";
        displayVal += "2"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "2";
        displayVal = "2";
        reset();
        console.log("reset input num 2");
    } else {
        inputDisplay.textContent += "2";
        displayVal += "2";
    }
})

numThreeButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "3";
        displayVal += "3"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "3";
        displayVal = "3";
        reset();
        console.log("reset input num 3");
    } else {
        inputDisplay.textContent += "3";
        displayVal += "3";
    }
})

numFourButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "4";
        displayVal += "4"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "4";
        displayVal = "4";
        reset();
        console.log("reset input num 4");
    } else {
        inputDisplay.textContent += "4";
        displayVal += "4";
    }
})

numFiveButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "5";
        displayVal += "5"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "5";
        displayVal = "5";
        reset();
        console.log("reset input num 5");
    } else {
        inputDisplay.textContent += "5";
        displayVal += "5";
    }
})

numSixButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "6";
        displayVal += "6"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "6";
        displayVal = "6";
        reset();
        console.log("reset input num 6");
    } else {
        inputDisplay.textContent += "6";
        displayVal += "6";
    }
})

numSevenButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "7";
        displayVal += "7"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "7";
        displayVal = "1";
        reset();
        console.log("reset input num 7");
    } else {
        inputDisplay.textContent += "7";
        displayVal += "7";
    }
})

numEightButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "8";
        displayVal += "8"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "8";
        displayVal = "8";
        reset();
        console.log("reset input num 8");
    } else {
        inputDisplay.textContent += "8";
        displayVal += "8";
    }
})

numNineButton.addEventListener("click", () => {
    if (inputDisplay.textContent === "0") {
        inputDisplay.textContent = "9";
        displayVal += "9"
    } else if (inputDisplay.textContent == result) {
        calculatorDisplay.textContent = "";
        inputDisplay.textContent = "9";
        displayVal = "9";
        reset();
        console.log("reset input num 9");
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
const backspace = document.getElementById("backspace");

addButton.addEventListener("click", () => {
    if (equalsButtonUsed === true) {
        operator = "+";
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
    } else if (operator !== undefined && displayVal === "") {
        operator = "+";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("operator switch to add")
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
        console.log("add numbers, operator is currently addition");
    } else {
        firstNum = Number(displayVal);
        operator = "+";
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("first num loaded to add");
    }
})

subtractButton.addEventListener("click", () => {
    if (equalsButtonUsed === true) {
        operator = "-";
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("equals button used, subtract operator using");
    } else if (operator !== undefined && displayVal === "") {
        operator = "-";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("operator switch to subtract");
    } else if (firstNum === result && displayVal !== ""){
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum);
        firstNum = result;
        displayVal = "";
        operator = "-";
        secondNum = undefined;
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("subtract numbers, operator is currently subtraction");
    } else {
        firstNum = Number(displayVal);
        operator = "-";
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("first num loaded to subtract");
    }
})

multiplyButton.addEventListener("click", () => {
    if (equalsButtonUsed === true) {
        operator = "*";
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("equals button used, multiply operator using");
    } else if (operator !== undefined && displayVal === "") {
        operator = "*";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("operator switch to multiply");
    } else if (firstNum === result && displayVal !== ""){
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum);
        firstNum = result;
        displayVal = "";
        operator = "*";
        secondNum = undefined;
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("multiply numbers, operator is currently multiplication");
    } else {
        firstNum = Number(displayVal);
        operator = "*";
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("first num loaded to multiply");
    }
})

divisionButton.addEventListener("click", () => {
    if (equalsButtonUsed === true) {
        operator = "/";
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("division button used, division operator using");
    } else if (operator !== undefined && displayVal === "") {
        operator = "/";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("operator switch to divide");
    } else if (firstNum === result && displayVal !== ""){
        secondNum = Number(displayVal);
        result = operate(operator,firstNum,secondNum);
        firstNum = result;
        displayVal = "";
        operator = "/";
        secondNum = undefined;
        equalsButtonUsed = false;
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("divide numbers, operator is currently division");
    } else {
        firstNum = Number(displayVal);
        operator = "/";
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum} ${operator}`;
        inputDisplay.textContent = "";
        console.log("first num loaded to divide");
    }
})

equalsButton.addEventListener("click", () => {
    if (displayVal === "") {
        console.log("equals not possible")
        return;
    } else if (operator === undefined) {
        firstNum = Number(displayVal);
        result = firstNum;
        displayVal = "";
        calculatorDisplay.textContent = `${firstNum}`;
        inputDisplay.textContent = `${firstNum}`;
        equalsButtonUsed = true;
        console.log("number entered, no operator or secondNum");
    } else {
        secondNum = Number(displayVal);
        calculatorDisplay.textContent = `${firstNum} ${operator} ${secondNum} =`;
        result = operate(operator,firstNum,secondNum)
        firstNum = result;
        displayVal = "";
        operator = undefined;
        secondNum = undefined;
        equalsButtonUsed = true;
        inputDisplay.textContent = `${firstNum}`;
        console.log("equals used");
    }
})

backspace.addEventListener("click", () => {                     //TODO: make this work
    if (operator === undefined && secondNum === undefined) {
        displayVal = displayVal.slice(0,-1);
        inputDisplay.textContent = inputDisplay.textContent.slice(0, -1);
        console.log("backspace");
        console.log(displayVal);
    } else if (operator !== undefined && displayVal === "") {
        operator = undefined;
        calculatorDisplay.textContent = `${firstNum}`;
        console.log("operator removed");
    }
})