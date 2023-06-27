const selectedButtons = document.querySelectorAll('button');
const selectedCurrentInput = document.querySelector('.current-input');
const selectedResult = document.querySelector('.result');

let result = "";
let currentInput = "";

function Calculator() {
    this.calculate = function(operand, firstArg, secondArg) {
        switch (operand) {
            case '+':
                return firstArg + secondArg;
            case '-':
                return firstArg - secondArg;
            case '*':
                let result = firstArg * secondArg;
                if (Math.abs(result) > 99999999999999999999) {
                    return result.toExponential();
                } else {
                    return result;
                }
            case '/':
                const rounded = (firstArg / secondArg).toFixed(10);
                const trimmed = rounded.replace(/\.?0+$/, '');
                return Number(trimmed);
            default:
                return Number(firstArg);
        }
    }
}

const calculator = new Calculator();

let validButtonKeys = [];
selectedButtons.forEach((button) => {
    const dataKeys = button.getAttribute('data-key').split(' ');
    validButtonKeys.push(...dataKeys);
});

selectedButtons.forEach((button) => {
    button.addEventListener('click', function() {
        button.classList.add('scale-down');
        button.classList.remove('scale-up');
        setTimeout(function() {      
        currentInput = applyKeystroke(button.getAttribute('data-key'));
        selectedCurrentInput.innerText = currentInput;
        button.classList.remove('scale-down');
        button.classList.add('scale-up');
        }, 50)
    });
    button.addEventListener('mouseover', function() {
        button.classList.add('scale-up');
    });
    button.addEventListener('mouseout', function() {
        button.classList.remove('scale-up');
    });
});

window.addEventListener('keydown', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (validButtonKeys.includes(e.key)) {
        const button = document.querySelector(`button[data-key="${e.key}"]`);
        const pressedRemoveButton = (e.key === 'Backspace' && e.shiftKey);
        const removeButton = document.querySelector(`button[data-key="BackspaceShift"]`);

        if (pressedRemoveButton) {
            removeButton.classList.add('scale-down');
            removeButton.classList.remove('scale-up');
            setTimeout(function() {
                currentInput = applyKeystroke('BackspaceShift');
                selectedCurrentInput.innerText = currentInput;
                removeButton.classList.remove('scale-down');
                removeButton.classList.add('scale-up');
            }, 50);
      } else {
            button.classList.add('scale-down');
            button.classList.remove('scale-up');
            setTimeout(function() {
                currentInput = applyKeystroke(e.key);
                selectedCurrentInput.innerText = currentInput;
                button.classList.remove('scale-down');
                button.classList.add('scale-up');
            }, 50);
        }
    }
});

function applyKeystroke(key) {
    switch (true) {
        case (key === 'BackspaceShift'):
            selectedResult.textContent = "";
            currentInput = "";
            return currentInput;

        case (key === 'Backspace'):
            if (currentInput === 'Infinity' || currentInput === 'NaN') {
                currentInput = "";
                return currentInput;
            }
            return currentInput.slice(0, -1);

        case (key === '=' || key === 'Enter'):
            let currResult = calculator.calculate(result.slice(-1), Number(result.slice(0, -1)), Number(currentInput));
            selectedResult.textContent = "";
            result = "";
            currResult = currResult.toString();
            return currResult;

        case (key === '+' || key === '-'|| key === '/' || key === '*'):
            if (result.slice(-1) === '+' || result.slice(-1) === '-' ||
            result.slice(-1) === '*' || result.slice(-1) === '/') {
                return currentInput;
            }
            result = currentInput + key;
            selectedResult.textContent = currentInput + key;
            currentInput = "";
            return currentInput;

        default:
            if (currentInput === '0' && key !== '.') {
                currentInput = key;
            } else {
                currentInput += key;
            }
            return currentInput;
    }
}








  
  
  
  
  
  
  