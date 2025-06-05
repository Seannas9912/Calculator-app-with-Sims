// Reference display elements
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    let currentValue = display.value;
    if (justCalculated && !isNaN(value)) {
        display.value = value; 
        justCalculated = false;
        return;
    }

    // If current display shows 0 and user presses a number, replace 0
    if (currentValue === '0' && !isNaN(value)) {
        display.value = value;
    } else if (currentValue === '0' && value === '.') {
        display.value = currentValue + value;
    } else {
        display.value = currentValue + value;
    }

    justCalculated = false;

    console.log('Updated display value:', display.value);
}

function clearDisplay() {
    console.log('Display cleared');
    
    alert('Display cleared');
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
    
    alert('Last character deleted');
}

function calculate() {
    console.log('Calculation performed');
    
    alert('Calculation performed');
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('Calculator loaded');
    console.log('Display element:', display);

    if (display) {
        console.log('Current display value: ', display.value);
    } else {
        console.log('Display element not found');
    }
})