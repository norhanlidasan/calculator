const numbers = document.querySelectorAll(".number");
const firstOperand = document.querySelector(".first-operand");

numbers.forEach( number => {
    number.addEventListener('click', () => {
        let firstNumber = document.createElement("span")
        firstOperand.appendChild(firstNumber).textContent = number.value;
    })
})