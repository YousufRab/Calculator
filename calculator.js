let displayValue = document.getElementById('display').innerHTML;
let tempValue = ' ';
let secTempValue = '';
let chosenOperation = null;


function checkDisplaySize () {
    if (displayValue.toString().length > 11) {
        document.getElementById('display').style.fontSize = '12px';
    } else {
        document.getElementById('display').style.fontSize = '34px';
    }
}

// Define a function fadeIn to handle cancelling ongoing animation and beginning next animation

function fadeIn() {
    for (const animation of document.getAnimations()) {
        if(animation.animationName == 'calcGlow') {
            continue;
        } else {
            animation.cancel();
        }
    }
    document.getElementById('display').animate([{
        opacity: 0,
        opacity: 1,
    }], {
        duration: 500,
        iterations: 1,
        fill: 'forwards'
    });
}

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
            return displayValue;
        
    }
}

const opBtnPressed = document.querySelectorAll('.calcOperator');
opBtnPressed.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case "percentage":
                displayValue = percButton(Number(parseFloat(displayValue)));
                document.getElementById('display').innerHTML = displayValue;
                checkDisplaySize ();
                break;
            case "exponential":
                chosenOperation = 'exponential';
                tempValue = displayValue;
                document.getElementById('topDisplay').innerHTML = tempValue + " " + "^";
                displayValue = '0';
                document.getElementById('display').style.fontSize = '34px';
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
                document.getElementById('display').style.fontSize = '34px';
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
                checkDisplaySize ();
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
                chosenOperation = null;
                displayValue = x;
                checkDisplaySize ();
                document.getElementById('display').innerHTML = displayValue;
                break;
            }
            fadeIn();    
    }
    )
}
)

// Number button functions 

function oneButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "1";
    }else {
        displayValue += "1";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function twoButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "2";
    }else {
        displayValue += "2";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function threeButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "3";
    }else {
        displayValue += "3";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function fourButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "4";
    }else {
        displayValue += "4";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function fiveButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "5";
    }else {
        displayValue += "5";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function sixButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "6";
    }else {
        displayValue += "6";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function sevenButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "7";
    }else {
        displayValue += "7";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function eightButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "8";
    }else {
        displayValue += "8";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function nineButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = '';
        displayValue += "9";
    }else {
        displayValue += "9";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
}

function zeroButton() {
    checkDisplaySize ();
    if (displayValue == "0") {
        displayValue = "0";
    }else {
        displayValue += "0";
    }
    document.getElementById('display').innerHTML = displayValue;
    fadeIn();
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

onload = () => {
    document.getElementById('display').style.opacity = 0;
    fadeIn();
}

