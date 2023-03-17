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
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equalbutton');

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
    calculatorDisplay.textContent = displayValue.toString();
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
            if (secondNumber === 0 || secondNumber === null){
                console.log('error: cannot divid by zero');
            }
            else{
                result = divide(a, b);
            }
            break;
        case '=':
            break;
    }
    return result;
}

numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        if (displayValue === 0 && !calculatorDisplay.textContent.includes('.')) {
            // check if displayValue is 0 or is `0.` 
            calculatorDisplay.textContent = numberButton.textContent;
        }
        else {
            calculatorDisplay.textContent += numberButton.textContent;
        }
        displayValue = parseFloat(calculatorDisplay.textContent);
        if(operator === null){
            firstNumber = displayValue;
        }
        else{
            secondNumber = displayValue;
        }
        updateTestArea();
        console.log(displayValue);

    });

});

decimalButton.addEventListener('click', e => {
    if (Number.isInteger(displayValue) && !calculatorDisplay.textContent.includes('.')) {
        // displayValue is an integer, so can use decimal
        calculatorDisplay.textContent += '.';
    }
    else {
        // displayValue already has decimal, so can't add decimal
    }
})

posnegButton.addEventListener('click', e => {
    displayValue = -displayValue;
    calculatorDisplay.textContent = displayValue;

    console.log(displayValue);
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {
        operator = operatorButton.textContent;
        operatorButtons.forEach(f => f.classList.remove('selected'));
        e.target.classList.toggle('selected');
        updateTestArea();
    })
})




function updateTestArea() {
    testAreaFirstNumber.textContent = `firstNumber: ${firstNumber}`;
    testAreaSecondNumber.textContent = `secondNumber: ${secondNumber}`;
    testAreaOperator.textContent = `operator: ${operator}`;
    testAreaCalcResult.textContent = `calcResult: ${calcResult}`;
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
