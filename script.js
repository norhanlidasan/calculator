const numbers = document.querySelectorAll(".number");
const currentDisplay = document.querySelector(".current-display");

let display = 0;

numbers.forEach(number => {
    currentDisplay.textContent = display;
    number.addEventListener('click', () => {
            display = null;     
            currentDisplay.textContent += number.textContent;
    })
})