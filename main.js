

number1 = document.getElementById('1')
number2 = document.getElementById('2')
number3 = document.getElementById('3')
number4 = document.getElementById('4')
number5 = document.getElementById('5')
number6 = document.getElementById('6')
number7 = document.getElementById('7')
number8 = document.getElementById('8')
number9 = document.getElementById('9')
add = document.getElementById('+')
minus = document.getElementById('-')
multiply = document.getElementById('*')
divide = document.getElementById('/')
c = document.getElementById('C')
equal = document.getElementById('=')
operationDisplay = document.getElementById('operationDisplay')
result = document.getElementById('result')

document.getElementById('0').addEventListener('click', buttonPressed('0'))
number1.addEventListener('click', buttonPressed('1'))
number2.addEventListener('click', buttonPressed('2'))
number3.addEventListener('click', buttonPressed('3'))
number4.addEventListener('click', buttonPressed('4'))
number5.addEventListener('click', buttonPressed('5'))
number6.addEventListener('click', buttonPressed('6'))
number7.addEventListener('click', buttonPressed('7'))
number8.addEventListener('click', buttonPressed('8'))
number9.addEventListener('click', buttonPressed('9'))
add.addEventListener('click', buttonPressed('+'))
minus.addEventListener('click', buttonPressed('-'))
multiply.addEventListener('click', buttonPressed('*'))
divide.addEventListener('click', buttonPressed('/'))
c.addEventListener('click', buttonPressed('c'))
equal.addEventListener('click', buttonPressed('='))

function buttonPressed(input) {
    if (input == '=') {
        evaluate()
    } else if (input = 'c') {
        cancel()
    } else {
        operationDisplay.textContent += input
    }
}

function evaluate() {
    try {
        result = eval(operationDisplay.textContent)
    } catch (error) {
        
    }
}

function cancel() {
    result.textContent = ''
    operationDisplay.textContent = ''
}