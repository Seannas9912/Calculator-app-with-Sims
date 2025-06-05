// Reference display elements
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
}

function getLastChar() {
    return display.value.slice(-1);
}

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    let currentValue = display.value;
    if (justCalculated && !isNaN(value)) {
        display.value = value; 
        justCalculated = false;
        return;
    }

    if (justCalculated && isOperator(value)) {
        display.value = currentValue + value;
        justCalculated = false;
        return;
    }

    // Handle operator input
    if (isOperator(value)) {
        // dont allow operator as first character unless its a minus sign
        if (currentValue === '0' && value !== '-') {
            return; //Do nothing
        }
        // If last character is an operator, replace it with the new operator
        if (isOperator(getLastChar())) {
            display.value = currentValue.slice(0, -1) + value;
        } else {
            display.value = currentValue + value;
        }
    } else if (isNaN(value)) {
        if (currentValue === '0'){
            display.value = value;
        } else {
            display.value = currentValue + value;
        }
    } else if (value === '.') {
        if (currentValue === '0') {
            display.value = currentValue + value;
        } else {
            // Get the last number in the display (after last operator)
            let parts = currentValue.split('/[+\-*/]');
            let lastNumber = parts[parts.length - 1];
            // Only add the decimal if the last number doesn't have one
            if (!lastNumber.includes('.')) {
                display.value = currentValue + value;
            }
        }
    } else {
        display.value = currentValue + value;
    }
    // Reset justCalculated flag
    justCalculated = false;

    console.log('Updated display value:', display.value);
}

function clearDisplay() {
    console.log('Display cleared');

    display.value = '0';
    justCalculated = false;
    
    display.style.backgroundColor = '#f0f0f0';
    setTimeout(() => {
        display.style.backgroundColor = '';}, 150);
}

function deleteLast() {
    console.log('Last character deleted');

    let currentValue = display.value;

    // If theres only one character or its 0, reset to 0
    if (currentValue.length <= 1 || currentValue === '0') {
        display.value = '0';
    } else {
        display.value = currentValue.slice(0, -1);
    }
}

function calculate() {
    console.log('Calculation performed');
    
    alert('Calculation performed');
}

document.addEventListener('keydown', function(event) {
    console.log('Key pressed:', event.key);

    if (event.key >= '0' && event.key <= '9') {
        appendToDisplay(event.key);
    } else if (event.key === '.') {
        appendToDisplay('.');
    } else if (event.key === '+') {
        appendToDisplay('+');
    } else if (event.key === '-') {
        appendToDisplay('-');
    } else if (event.key === '*') {
        appendToDisplay('*');
    } else if (event.key === '/') {
        event.preventDefault();
        appendToDisplay('/');
    } else if (event.key === 'Enter' || event.key === '=') {
        calculate();
    } else if (event.key === 'Escape' || event.key === 'c' || event.key === 'C') {
        clearDisplay();
    } else if (event.key === 'Backspace' || event.key === 'Delete') {
        deleteLast();
    }
})

document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded');
    console.log('Display element:', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})