const validKeyStrokes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.', '+', '-', ,'*', '/', 'Enter'];

const selectedButtons = document.querySelectorAll('button');
let elementMouseOver = false;

selectedButtons.forEach((button) => {

    button.addEventListener('click', function() {
        button.classList.add('scale-down');
        button.classList.remove('scale-up');
        setTimeout(function() {
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

  
  
  
  
  
  
  