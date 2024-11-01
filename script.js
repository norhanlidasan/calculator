const numbers = document.querySelectorAll(".number");
const currentDisplay = document.querySelector(".current-display");
const previousDisplay = document.querySelector(".previous-display");
const addition = document.querySelector(".add");
const equal = document.querySelector("#equal")
const del = document.querySelector(".delete");


function appendNumber(){
numbers.forEach(number => {
    number.addEventListener('click', () => {
            removeZero();   
            currentDisplay.textContent += number.textContent;
    })
})
}

appendNumber();
function removeZero(){
    if(currentDisplay.textContent == 0){
        currentDisplay.textContent = '';
    };
}

function clearDisplay(){
    del.addEventListener('click', ()=>{
        currentDisplay.textContent = 0;
        previousDisplay.textContent = "";
    })
}
clearDisplay();

function addButton(){
    addition.addEventListener('click', (e) => {

        if (currentDisplay.textContent == 0 || currentDisplay.textContent == '') {
            e.preventDefault();
        } else {
            previousDisplay.textContent = `${currentDisplay.textContent} +`;
            currentDisplay.textContent = 0;
        }

    })
}
addButton();



equal.addEventListener('click', evaluate);

function evaluate() {;
    let previous = previousDisplay.textContent;
    let preDigit = previous.slice(0,-1);
    let current = currentDisplay.textContent;
    let operation = previous.at(-1);
    let result;
    console.log(preDigit);
    
    switch (operation){

        case '+':
        result = add(Number(preDigit),Number(current));
        console.log(result);
        currentDisplay.textContent = result;
        break;
    }
    
}



function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}