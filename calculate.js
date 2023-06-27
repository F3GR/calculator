const selectedButtons = document.querySelectorAll('button');
const selectedCurrentInput = document.querySelector('.current-input');

let validButtonKeys = [];
selectedButtons.forEach((button) => {
    validButtonKeys.push(button.getAttribute('data-key'));
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
        }, 50)
    });
    button.addEventListener('mouseover', function() {
        button.classList.add('scale-up');
    });
    button.addEventListener('mouseout', function() {
        button.classList.remove('scale-up');
    });
});

// Keystrokes
window.addEventListener('keydown', function(e) {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (validButtonKeys.includes(e.key)) {
    const button = [...selectedButtons].find((button) => button.getAttribute('data-key') === e.key);

    button.classList.add('scale-down');
    button.classList.remove('scale-up');

    setTimeout(function() {       
    currentInput += e.key;
    selectedCurrentInput.innerText = currentInput;
    button.classList.remove('scale-down');
    button.classList.add('scale-up');
    }, 50);
    }
});


  
  
  
  
  
  
  