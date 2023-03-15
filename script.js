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

let displayValue = 0;
let testPositiveValue = 10;
let testNegativeValue = -10;

function resetCalculator() {
    displayValue = 0;
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

