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
/*                                                              
/* Easter eggs:
/*          * Hell mode                                                     
/*                                                              
/*                                                              */


const fullCalculator = document.querySelector('.calculator');
const calculatorActiveArea = document.querySelector('.display .activearea');


const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const posnegButton = document.querySelector('.posneg');
const operatorButtons = document.querySelectorAll('.operatorbuttons .operator');
const equalButton = document.querySelector('.equalbutton');
const clearButton = document.querySelector('.clearbutton');


let firstNumber = null;
let secondNumber = null;
let operator = null;
let calcResult = null;


/* testarea */
const testAreaFirstNumber = document.querySelector('.testarea .firstnumber');
const testAreaSecondNumber = document.querySelector('.testarea .secondnumber');
const testAreaOperator = document.querySelector('.testarea .operator');
const testAreaCalcResult = document.querySelector('.testarea .calcresult');
const testAreaDisplayValue = document.querySelector('.testarea .displayvalue');
/* end testarea */


function resetCalculator() {
    //reset values
    displayValue = null;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    calcResult = null;

    //reset ActiveArea display area
    calculatorActiveArea.textContent = displayValue;

    //reset operator buttons
    operatorButtons.forEach(f => f.classList.remove('selected'));

    updateTestArea();
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
            if (secondNumber === 0 || secondNumber === null || secondNumber === '0') {

                result = 'cannot divide by zero';

            }
            else {
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
        if ((displayValue === null || displayValue === 0) ||
            displayValue === firstNumber
        ) {
            displayValue = numberButton.textContent;
        }
        else {
            displayValue += numberButton.textContent;
        }
        updateDisplay();
        updateTestArea();
    });
});

decimalButton.addEventListener('click', e => {
    if (calculatorActiveArea.textContent === '') {
        // displayValue is blank
        calculatorActiveArea.textContent += '0.';
    }
    else if (!calculatorActiveArea.textContent.includes('.')) {
        // displayValue is an integer, so can use decimal
        calculatorActiveArea.textContent += '.';
    }
    else {
        // displayValue already has decimal, so can't add decimal
    }
    displayValue = calculatorActiveArea.textContent;
})

posnegButton.addEventListener('click', e => {
    displayValue = calculatorActiveArea.textContent;
    displayValue = -displayValue;
    calculatorActiveArea.textContent = displayValue;

    console.log(displayValue);
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {


        operatorButtons.forEach(f => f.classList.remove('selected'));
        e.target.classList.toggle('selected');
        if ((firstNumber === null && operator === null) ||
            (firstNumber && secondNumber && operator === null)) {
            firstNumber = displayValue;
            updateDisplay();
        }
        else if (firstNumber && operator) {
            secondNumber = displayValue;

            displayValue = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);

            operator = operatorButton.textContent;
            updateDisplay();
            firstNumber = displayValue;

        }
        operator = operatorButton.textContent;

        updateTestArea();

    })
})

equalButton.addEventListener('click', e => {

    operatorButtons.forEach(f => f.classList.remove('selected'));

    if (operator) {
        if (firstNumber) {
            secondNumber = displayValue;
        }
        displayValue = operate(parseFloat(firstNumber), parseFloat(secondNumber), operator);
        firstNumber = displayValue;
        updateDisplay();
    }


    operator = null;

    updateTestArea();
})

clearButton.addEventListener('click', e => {
    resetCalculator();
})

function showCurrentOperation() {
    // to display current operation above activearea
}


function updateDisplay() {
    if (displayValue.toString().includes('.')) {

        displayValue = parseFloat(Number(displayValue).toFixed(8));
    }
    calculatorActiveArea.textContent = displayValue;
    if(displayValue === 7734 || displayValue === '7734'){
        hellMode();
    }

}

function hellMode (){
    fullCalculator.classList.toggle('hell');
}

function updateTestArea() {
    testAreaFirstNumber.textContent = `firstNumber: ${firstNumber}`;
    testAreaSecondNumber.textContent = `secondNumber: ${secondNumber}`;
    testAreaOperator.textContent = `operator: ${operator}`;
    testAreaCalcResult.textContent = `calcResult: ${calcResult}`;
    testAreaDisplayValue.textContent = `displayValue: ${displayValue}`;
}


/*
IDEAS

Easter Egg: if enter 7734, flip calculator and put flames in background, etc.
*/