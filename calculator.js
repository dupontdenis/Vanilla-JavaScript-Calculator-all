export default class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  
    /**
     * 
     */
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
    }
  
    /**
     * 
     * @param {String} number Number to append to currentOperand
     */
    appendNumber(number) {
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    /**
     * 
     * @param {Sring} operation The operator to be used by the cacul
     * @returns 
     */
    chooseOperation(operation) {

      if (this.currentOperand === '' || this.previousOperand !== '') return

      this.operation = operation
      this.previousOperand = this.currentOperand + this.operation
      this.currentOperand = ''
    }
  
    compute() {
      let computation
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      if (isNaN(prev) || isNaN(current)) return
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
        default:
          return
      }
      this.currentOperand = computation
      this.operation = undefined
      this.previousOperand = ''
    }
  
    updateDisplay() {
      this.currentOperandTextElement.innerText =  this.currentOperand
      if (this.operation != null) {
        this.previousOperandTextElement.innerText = this.previousOperand
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  