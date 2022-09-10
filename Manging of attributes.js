//html attribute with javaScript

//set attribute with javaScript
let element = document.querySelector('#first')
element.setAttribute('class', 'main ss');

//remove attribute with javaScript
element.removeAttribute('class');

//get attribute with javaScript
let a = element.getAttribute('id');
console.log(a);

//check if attribute exists or not with javaScript

let checkAt = element.hasAttribute('class');
console.log(checkAt); //return fasle becuz in above lines we remove the class attribute

