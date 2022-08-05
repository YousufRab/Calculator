function add(a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

function multiply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function percentage (a) {
    return a / 100;
}

function negPos (a) {
    if (a > 0) {
        return -Math.abs(a);
    } else {
        return Math.abs(a);
    }
}

function operate (operator, x, y) {
    switch(operator) {
        case ('addition'):
            return add(x, y);
        case ('subtraction'):
            return subtract(x, y);
        case ('multiplication'):
            return multiply(x, y);
        case ('division'):
            return divide(x, y);
    }
}

function oneButton() {
    displayValue += "1"
    document.getElementById('display').innerHTML = displayValue;
}

function twoButton() {
    displayValue += "2"
    document.getElementById('display').innerHTML = displayValue;
}

function threeButton() {
    displayValue += "3"
    document.getElementById('display').innerHTML = displayValue;
}

function fourButton() {
    displayValue += "4"
    document.getElementById('display').innerHTML = displayValue;
}

function fiveButton() {
    displayValue += "5"
    document.getElementById('display').innerHTML = displayValue;
}

function sixButton() {
    displayValue += "6"
    document.getElementById('display').innerHTML = displayValue;
}

function sevenButton() {
    displayValue += "7"
    document.getElementById('display').innerHTML = displayValue;
}

function eightButton() {
    displayValue += "8"
    document.getElementById('display').innerHTML = displayValue;
}

function nineButton() {
    displayValue += "9"
    document.getElementById('display').innerHTML = displayValue;
}

function zeroButton() {
    displayValue += "0"
    document.getElementById('display').innerHTML = displayValue;
}

function twoButton() {
    displayValue += "2"
    document.getElementById('display').innerHTML = displayValue;
}


let displayValue = '';

const numBtnPressed = document.querySelectorAll('.calcNum');
numBtnPressed.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case "one":
                oneButton();
                break;
            case "two":
                twoButton();
                break;
            case "three":
                threeButton();
                break;
            case "four":
                fourButton();
                break;
            case "five":
                fiveButton();
                break;
            case "six":
                sixButton();
                break;
            case "seven":
                sevenButton();
                break;
            case "eight":
                eightButton();
                break;
            case "nine":
                nineButton();
                break;
            case "ten":
                tenButton();
                break;
            case "zero":
                zeroButton();
                break;
        }
    })
});



