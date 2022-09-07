//get the elements of the HTML
let element = document.getElementById('first')
let getElement = element.innerHTML;
console.log(getElement);

//Set the elements of the HTML

element.innerHTML = '<h4> hello this is a h2 heading </h4> '

//we can remove the entire contents of the document 
//by clearing the contents of the  document.body element:
console.log(element.innerHTML = '')

//Do not use innerHTML to set new contents that you have no control to avoid a security risk.
