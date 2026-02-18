// ----------------------
// GLOBAL COUNTER
// ----------------------
let counter = 0;

function updateCounter() {
    document.getElementById("counterDisplay").innerText = counter;
}

// ----------------------
// Simple Functions
// ----------------------
function increaseCounter() {
    counter++;
    updateCounter();
}

function decreaseCounter() {
    counter--;
    updateCounter();
}

// ----------------------
// Simple For Loop
// ----------------------
function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").innerText = result.trim();
}

// ----------------------
// Repetition with Condition
// ----------------------
function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i += 2) {
        result += i + " ";
    }
    document.getElementById("oddResult").innerText = result.trim();
}

// ----------------------
// Arrays
// ----------------------
function showArray() {
    let arr = [];

    for (let i = counter; i >= 1; i--) {
        if (i % 5 === 0) {
            arr.push(i);
        }
    }

    console.log(arr);
}

// ----------------------
// Objects and Form Fields
// ----------------------
function showCarObject() {
    let car = {
        cType: document.getElementById("carType").value,
        cMPG: document.getElementById("carMPG").value,
        cColor: document.getElementById("carColor").value
    };

    console.log(car);
}

// ----------------------
// Load Car Objects
// ----------------------
function loadCar(num) {
    let selectedCar = window["car" + num];

    document.getElementById("carType").value = selectedCar.cType;
    document.getElementById("carMPG").value = selectedCar.cMPG;
    document.getElementById("carColor").value = selectedCar.cColor;
}

// ----------------------
// Changing Styles
// ----------------------
function makeRed() {
    document.getElementById("styleBox").style.color = "red";
}

function makeGreen() {
    document.getElementById("styleBox").style.color = "green";
}

function makeBlue() {
    document.getElementById("styleBox").style.color = "blue";
}
