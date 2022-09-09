let div = document.querySelector('#first');

let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
h2.textContent = 'hello this is h2';
h3.textContent = 'hello this is h3';

//this method insert an element before the selected element
div.before(h2);

//this method insert an element after the selected element

div.after(h3);