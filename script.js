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
const numberButtons = document.querySelectorAll('.numbers div');


function resetCalculator() {
    let displayValue = 0;
    calculatorDisplay.innerText = displayValue;
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
        calculatorDisplay.innerText += numberButton.innerText;
    });

});