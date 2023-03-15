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

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}

function operate(a,b,operator){
    let result;
    switch (operator){
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            result = divide(a,b);
            break;
    }
    return result;
}

console.log(add(3,4));
console.log(subtract(3,4));
console.log(multiply(3,4));
console.log(divide(3,4));
console.log(operate(3,4,'+'));
console.log(operate(3,4,'-'));
console.log(operate(3,4,'*'));
console.log(operate(3,4,'/'));
