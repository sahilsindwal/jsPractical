let btn = document.querySelector('#btn');


// add the event listener

let showAlert = function() {
    alert('Clicked!');

// remove the event listener
// remove the event listener won't work with anonymous function
btn.removeEventListener('click', showAlert);

};

btn.addEventListener('click', showAlert);





