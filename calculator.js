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
    document.getElementById('display').innerHTML = "1";
}

function twoButton() {
    document.getElementById('display').innerHTML = "2"
}

let displayValue = 0;

const buttonPressed = document.querySelectorAll('.btn');
buttonPressed.forEach((button) => {
    button.addEventListener('click', (event) => {
        switch(event.target.id) {
            case "one":
                oneButton();
            case "two":
                twoButton();
        }
    })
});
