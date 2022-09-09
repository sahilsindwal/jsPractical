let element = document.querySelector('#first')

let first = element.firstChild;

let h2 = document.createElement('h2')
h2.innerText = 'hello this is a h2';

let h3 = document.createElement('h3');
h3.innerText = 'hello this is a h3';

//insert multiple nodes before the first child of the parent element
first.before(h2,h3);






