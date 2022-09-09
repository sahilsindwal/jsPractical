//replaceChild method is used to replace any element
let element = document.querySelector('#first')
let h2 = document.createElement('h2');
h2.innerText = 'hello thi is a heading 2';
element.replaceChild(h2, element.firstElementChild);

//cloneNode() method is used to clone an element
let cloneE = element.cloneNode(true);
cloneE.id = 'new';
element.after(cloneE);

//removeChild() method is used to remove an element

while(element.firstChild){
    element.removeChild(element.firstElementChild);

}

//You can remove all child nodes of an element by 
//setting the innerHTML property of the parent node to blank:

element.innerHTML = ' ';

