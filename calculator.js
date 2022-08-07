let displayValue = '';
let tempValue = ' ';
let secTempValue = '';
let chosenOperation = null;

// Operator button functions

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract (a, b) {
    return Number(a) - Number(b);
}

function multiply (a, b) {
    return Number(a) * Number(b);
}

function divide (a, b) {
    return Number(a) / Number(b);
}

function percButton (a) {
    return a/100;   
}

function negPos (a) {
    if (a > 0) {
        return -Math.abs(a);
    } else {
        return Math.abs(a);
    }
}

function calculate (operator, x, y) {
    switch(operator) {
        case "addition":
            return add(x, y);
        case "subtraction":
            return subtract(x, y);
        case "multiplication":
            return multiply(x, y);
        case "division":
            return divide(x, y);
        case "exponential":
            return x ** y;
        case null:
            return 0;
    }
}

const opBtnPressed = document.querySelectorAll('.calcOperator');
opBtnPressed.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case "percentage":
                displayValue = percButton(Number(parseFloat(displayValue)));
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "exponential":
                chosenOperation = 'exponential';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "^";
                displayValue = '0';
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "delete":
                if (displayValue.length == 1){
                    displayValue = "0";
                    document.getElementById('display').innerHTML = displayValue
                } else {
                    let x = displayValue.toString().slice(0, -1);
                    displayValue = x;
                    document.getElementById('display').innerHTML = displayValue;
                }
                break;
            case "clear":
                displayValue = "0";
                tempValue = " "
                document.getElementById('display').innerHTML = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue;
                break;
            case "addition":
                chosenOperation = 'addition';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "+";
                displayValue = '0';
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "subtraction":
                chosenOperation = 'subtraction';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "-";
                displayValue = '0';
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "multiplication":
                chosenOperation = 'multiplication';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "x";
                displayValue = '0';
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "period":
                if (displayValue.includes(".")) {
                    displayValue = displayValue;
                } else {displayValue.toString();
                    displayValue += "."
                    document.getElementById('display').innerHTML = displayValue;
                }
                break;
            case "negPos":
                displayValue = negPos(Number(parseFloat(displayValue)));
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "division":
                chosenOperation = 'division';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "÷";
                displayValue = '0';
                document.getElementById('display').innerHTML = displayValue;
                break;
            case "calculate":
                let x = calculate(chosenOperation, tempValue, displayValue);
                displayValue = x;
                document.getElementById('display').innerHTML = displayValue;
                break;
        }
    })
})

// Number button functions 

function oneButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "1";
    }else {
        displayValue += "1";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function twoButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "2";
    }else {
        displayValue += "2";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function threeButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "3";
    }else {
        displayValue += "3";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function fourButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "4";
    }else {
        displayValue += "4";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function fiveButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "5";
    }else {
        displayValue += "5";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function sixButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "6";
    }else {
        displayValue += "6";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function sevenButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "7";
    }else {
        displayValue += "7";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function eightButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "8";
    }else {
        displayValue += "8";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function nineButton() {
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "9";
    }else {
        displayValue += "9";
    }
    document.getElementById('display').innerHTML = displayValue;
}

function zeroButton() {
    if (displayValue == "0") {
        displayValue = "0";
    }else {
        displayValue += "0";
    }
    document.getElementById('display').innerHTML = displayValue;
}


//////////

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



