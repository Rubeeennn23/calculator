function add(a,b) {
    return parseInt(a)+parseInt(b)
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

function operate(first,operator,second, result) {
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

function updateResult() {
    textResult += this.textContent;
    const resultText = document.querySelector('#result');
    resultText.textContent = `${textResult}`;
    return textResult
}

function updateOperation() {
       if (!first && !operator) {
        first = textResult;
        operator = this.textContent;
        textOperation = first + operator;
        const operationText = document.querySelector('#operation');
        operationText.textContent = `${textOperation}`;
        textResult = '';
       } else {
        calculateResult()
        first = textResult
        operator = this.textContent
        textOperation = first + operator;
        const operationText = document.querySelector('#operation');
        operationText.textContent = `${textOperation}`;
        textResult = '';
        } return {
        first,
        operator,
        textOperation,
        textResult
        }
}    


function calculateResult() {
    second = textResult;
    if (!first || !operator || !second) {
        textOperation = 'ERROR, you need to select first which operation you want to evaluate'
        const operationText = document.querySelector('#operation');
        operationText.textContent = `${textOperation}`;
    } else if (operator === '/' && second==='0') {
        alert("you can't divide by 0, try another operation!");
        result = 0 
    } else {
        second = textResult
        textResult = Math.round(operate(first,operator,second)*100)/100;
        const resultText = document.querySelector('#result');
        resultText.textContent = `${textResult}`;
        textOperation += second;
        const operationText = document.querySelector('#operation');
        operationText.textContent = `${textOperation}`;
    } return {
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
    const resultText = document.querySelector('#result');
    resultText.textContent = `${textResult}`;
    const operationText = document.querySelector('#operation');
    operationText.textContent = `${textOperation}`;
    return first,operator,second,textResult,textOperation,result
}

let first = '';
let operator = '';
let second = '';
let textResult='';
let textOperation='';
let result = '';

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
