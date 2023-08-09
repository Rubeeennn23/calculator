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
let textResult='';
let textOperation='';

function updateResult() {
    textResult += this.textContent;
    const resultText = document.querySelector('#result');
    resultText.textContent = `${textResult}`;
    return textResult
}

function updateOperation() {
    first += textResult;
    operator += this.textContent;
    textOperation += first + operator;
    textResult = '';
    const operationText = document.querySelector('#operation');
    operationText.textContent = `${textOperation}`;
    return {
        first,
        operator,
        textOperation,
        textResult
    }
}

function calculateResult() {
    second += textResult
    textOperation += second + '=';
    const operationText = document.querySelector('#operation');
    operationText.textContent = `${textOperation}`;
    textResult = operate(first,operator,second);
    const resultText = document.querySelector('#result');
    resultText.textContent = `${textResult}`;
    return {
        second,
        result, 
        textOperation, 
        textResult
    }
}

function clearAll() {
    first = '';
    operator = '';
    second = '';
    textResult='';
    textOperation='';
    result = ''
    return {
        first, 
        operator, 
        second, 
        textResult, 
        textOperation, 
        result
    }
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

const clearSign = document.querySelector('#clear');
clearSign.addEventListener('click',clearAll);
