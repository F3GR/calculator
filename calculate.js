const selectedButtons = document.querySelectorAll('button');
const selectedCurrentInput = document.querySelector('.current-input');

let validButtonKeys = [];
selectedButtons.forEach((button) => {
    const dataKeys = button.getAttribute('data-key').split(' ');
    validButtonKeys.push(...dataKeys);
});

let currentInput = "";


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
    switch (key) {
        case 'BackspaceShift':
            currentInput = "";
            return currentInput;
        case 'Backspace':
            return currentInput.slice(0, -1);
        case ('Enter'):
            currentInput = "";
            return currentInput;
        case ('='):
            currentInput = "";
            return currentInput;
        default:
            currentInput += key;
            return currentInput;
    }
}








  
  
  
  
  
  
  