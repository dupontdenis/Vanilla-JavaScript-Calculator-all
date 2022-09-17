import Calculator from "./calculator.js"

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')

const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculatorGrid = document.querySelector('[data-grid-contener]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// numberButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     calculator.appendNumber(button.innerText)
//     calculator.updateDisplay()
//   })
// })


calculatorGrid.addEventListener('click', (e) => {
  if (e.target.matches('[data-number]')){
    calculator.appendNumber(e.target.innerText)
    calculator.updateDisplay()
  }
})


operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButton.addEventListener('click', button => {
  calculator.compute()
  calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.updateDisplay()
})

