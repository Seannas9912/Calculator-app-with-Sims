// Reference display elements
const display = document.getElementById('display');

// Track if we have performed a calculation
let justCalculated = false;

function appendToDisplay(value) {
    console.log('Button pressed:', value);

    alert('You pressed: ' + value);
}

function clearDisplay() {
    console.log('Display cleared');
    
    alert('Display cleared');
}

function deleteLast() {
    console.log('Last character deleted');
    
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