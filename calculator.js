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