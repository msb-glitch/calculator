/* Calculator project for The Odin Project
/* Start 14 March 2023
/*
/* Basic calculator programmed in JS with HTML/CSS display
/* Functions: 
/*          * add
/*          * subtract
/*          * multiply
/*          * divide
/*
/* Input: 
/*          * keyboard
/*          * mouse
/*                                                              */



const calculatorDisplay = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const posnegButton = document.querySelector('.posneg');
const operatorButtons = document.querySelectorAll('.operators div');

let displayValue = 0;
let testPositiveValue = 10;
let testNegativeValue = -10;

let firstNumber = null;
let secondNumber = null;
let operator = null;
let calcResult = null;

/* testarea */
const testAreaFirstNumber = document.querySelector('.testarea .firstnumber');
const testAreaSecondNumber = document.querySelector('.testarea .secondnumber');
const testAreaOperator = document.querySelector('.testarea .operator');
const testAreaCalcResult = document.querySelector('.testarea .calcresult');

function resetCalculator() {
    displayValue = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    calculatorDisplay.innerText = displayValue.toString();
}

resetCalculator();

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(a, b, operator) {
    let result;
    switch (operator) {
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case '*':
            result = multiply(a, b);
            break;
        case '/':
            result = divide(a, b);
            break;
        case '=':
            break;
    }
    return result;
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        if (displayValue === 0 && !calculatorDisplay.innerText.includes('.')) {
            // check if displayValue is 0 or is `0.` 
            calculatorDisplay.innerText = numberButton.innerText;
        }
        else {
            calculatorDisplay.innerText += numberButton.innerText;
        }
        displayValue = parseFloat(calculatorDisplay.innerText);

        console.log(displayValue);

    });

});

decimalButton.addEventListener('click', e => {
    if (Number.isInteger(displayValue) && !calculatorDisplay.innerText.includes('.')) {
        // displayValue is an integer, so can use decimal
        calculatorDisplay.innerText += '.';
    }
    else {
        // displayValue already has decimal, so can't add decimal
    }
})

posnegButton.addEventListener('click', e => {
    displayValue = -displayValue;
    calculatorDisplay.innerText = displayValue;

    console.log(displayValue);
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {

        if (operator === '=') {
        }
        else {
            operator = operatorButton.innerText;
        }

        if (calcResult === null) {
            firstNumber = parseFloat(calculatorDisplay.innerText);

        }
        else if (operator != '=') {
            secondNumber = parseFloat(calculatorDisplay.innerText);

        }
        calcResult = operate(firstNumber, secondNumber, operator);
        firstNumber = calcResult;
        updateTestArea();
        displayValue = 0;

    })
})
function updateTestArea() {
    testAreaFirstNumber.innerText = `firstNumber: ${firstNumber}`;
    testAreaSecondNumber.innerText = `secondNumber: ${secondNumber}`;
    testAreaOperator.innerText = `operator: ${operator}`;
    testAreaCalcResult.innerText = `calcResult: ${calcResult}`;
}
/* operator logic
click operator
store current number in one variable
store operator
zero display for next number
get next number
click operator
store second number in operator
do operation
store result as new first number
display result
wait for operator or new number
*/
