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



const calculatorActiveArea = document.querySelector('.display .activearea');
const currentOperationArea = document.querySelector('.display .currentoperation');
const numberButtons = document.querySelectorAll('.number');
const decimalButton = document.querySelector('.decimal');
const posnegButton = document.querySelector('.posneg');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.querySelector('.equalbutton');
const clearButton = document.querySelector('.clearbutton');



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
const testAreaDisplayValue = document.querySelector('.testarea .displayvalue');

function resetCalculator() {
    displayValue = 0;
    firstNumber = null;
    secondNumber = null;
    operator = null;
    calcResult = null;
    calculatorActiveArea.textContent = displayValue;
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
            if (secondNumber === 0 || secondNumber === null) {
                console.log('error: cannot divid by zero');
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
console.log(calculatorActiveArea.textContent.length);
numberButtons.forEach(numberButton => {
    numberButton.addEventListener('click', e => {
        if ((calculatorActiveArea.textContent === '0' && !calculatorActiveArea.textContent.includes('.')) ) {
            // check if displayValue is 0 or is not `0.` 
            resetCalculator();
            calculatorActiveArea.textContent = numberButton.textContent;
        }
        
        else {
            calculatorActiveArea.textContent += numberButton.textContent;
        }

        console.log(calculatorActiveArea.textContent.length);
        updateTestArea();


    });

});

decimalButton.addEventListener('click', e => {
    if(calculatorActiveArea.textContent === ''){
        calculatorActiveArea.textContent += '0.';
    }
    else if (!calculatorActiveArea.textContent.includes('.')) {
        // displayValue is an integer, so can use decimal
        calculatorActiveArea.textContent += '.';
    }
    else {
        // displayValue already has decimal, so can't add decimal
    }
})

posnegButton.addEventListener('click', e => {
    displayValue = calculatorActiveArea.textContent;
    displayValue = -displayValue;
    calculatorActiveArea.textContent = displayValue;

    console.log(displayValue);
})

operatorButtons.forEach(operatorButton => {
    operatorButton.addEventListener('click', e => {

        operator = operatorButton.textContent;
        operatorButtons.forEach(f => f.classList.remove('selected'));
        e.target.classList.toggle('selected');

        if (firstNumber === null) {
            firstNumber = parseFloat(calculatorActiveArea.textContent);
            calculatorActiveArea.textContent = ' ';
            secondNumber = null;
        }
        else {
            secondNumber = parseFloat(calculatorActiveArea.textContent);
        }
        showCurrentOperation();
        
        updateTestArea();

    })
})

equalButton.addEventListener('click', e => {
    if (calculatorActiveArea.textContent != ' ' || firstNumber === calcResult) {
        secondNumber = parseFloat(calculatorActiveArea.textContent);
    }
    let result = operate(firstNumber, secondNumber, operator);
    showCurrentOperation();
    operatorButtons.forEach(f => f.classList.remove('selected'));
    operator = null;

    calcResult = parseFloat(result);

    calculatorActiveArea.textContent = calcResult;
    firstNumber = calcResult;
    console.log(`calculatoractivearea = ${calculatorActiveArea.textContent}`);
    
    updateTestArea();
})

clearButton.addEventListener('click', e => {
    resetCalculator();
})

function showCurrentOperation() {
    if (firstNumber) {
        currentOperationArea.textContent = firstNumber;
    }
    if (operator) {
        currentOperationArea.textContent += ` ${operator} `;
    }
    if (secondNumber) {
        currentOperationArea.textContent += `${secondNumber}`;
    }
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