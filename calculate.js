const validKeyStrokes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '+', '-', ,'*', '/', 'Enter'];

const selectedButtons = document.querySelectorAll('button');
const selectedCurrentInput = document.querySelector('.current-input');

let selectedButtonKeys = [];
selectedButtons.forEach((button) => {
    selectedButtonKeys.push(button.getAttribute('data-key'));
});

let currentInput = "";

// Click events
selectedButtons.forEach((button) => {
    button.addEventListener('click', function() {
        button.classList.add('scale-down');
        button.classList.remove('scale-up');
        setTimeout(function() {       
        currentInput += button.innerText;
        selectedCurrentInput.innerText = currentInput;
        button.classList.remove('scale-down');
        button.classList.add('scale-up');
        }, 100)
    });
    button.addEventListener('mouseover', function() {
        button.classList.add('scale-up');
    });
    button.addEventListener('mouseout', function() {
        button.classList.remove('scale-up');
    });
});

selectedCurrentInput.addEventListener('keydown', function(e) {
        if (validKeyStrokes.includes(e.key)) {

        button.classList.add('scale-down');
        button.classList.remove('scale-up');
    
        setTimeout(function(e) {       
        currentText += e.key;
        selectedCurrentInput.innerText = currentText;
        button.classList.remove('scale-down');
        button.classList.add('scale-up');
        }, 100);
    }
});


  
  
  
  
  
  
  