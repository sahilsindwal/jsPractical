// to create a element

let element = document.getElementById('first');

let h2 = document.createElement('h2');

h2.innerHTML = 'hello this is a heading 2';

//add id to the element
h2.id = 'hello'

//add class to the element
h2.className = 'first-class'
element.appendChild(h2);

//add text by using createTextNode
let p = document.createElement('p');

//add text by textcontent method
p.textContent = 'hello this text add by using textContent method'

let text = document.createTextNode('hello this is a para create by createTextNode method');
p.append(text);

p.id = 'id1';
p.className = 'classp';


element.append(p);
