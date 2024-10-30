const numbers = document.querySelectorAll(".number");
const currentDisplay = document.querySelector(".current-display");
const del = document.querySelector(".delete");
let display = 0;


numbers.forEach(number => {
    currentDisplay.textContent = display;
    number.addEventListener('click', () => {
            removeZero();
            display = null;     
            currentDisplay.textContent += number.textContent;
    })
})

function removeZero(){
    if(currentDisplay.textContent == 0){
        currentDisplay.textContent = ''
    };
}

function clearDisplay(){
    del.addEventListener('click', ()=>{
        currentDisplay.textContent = 0;
    })
}
clearDisplay();