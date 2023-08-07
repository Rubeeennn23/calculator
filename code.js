function add(a,b) {
    return a+b
}

function substract(a,b) {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b){
    return a/b
}

function operate(first,operator,second) {
    let result
    if (operator === '+') {
        result = add(first,second)
    } else if (operator === '-') {
        result = substract(first,second)
    } else if (operator === '*') {
        result = multiply(first,second)
    } else if (operator === '/') {
        result = divide(first,second)
    } return result
}

let first = '';
let operator = '';
let second = '';
let textDisplay='';

function updateResult() {
    textDisplay += this.textContent;
    const displayText = document.querySelector('#result');
    displayText.textContent = `${textDisplay}`;
    return textDisplay
}

function updateOperation() {
    first += textDisplay;
    operator += this.textContent
    const displayText = document.querySelector('#operation');
    displayText.textContent = `${textDisplay} ${operator}`;
    return {
        first,
        operator
    }

}

function calculateResult() {
    second += 
}

const number = document.querySelectorAll('#number');
number.forEach((button) => {
    button.addEventListener('click', updateResult)
    });

const operand = document.querySelectorAll('#operator');
operand.forEach((button) => {
    button.addEventListener('click',updateOperation)
    });   

const equalSign = document.querySelector('#equal');
equalSign.addEventListener('click',calculateResult);


