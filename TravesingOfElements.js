// JavaScript Get the Parent Element parentNode

console.log('to get the Parent Element by child elements')
let para =document.querySelector('.para');
console.log(para.parentElement);

// Get the next siblings
console.log('Get the next siblings')
let currentNode = document.querySelector('.para')
let nextSibling = currentNode.nextElementSibling;

// for selecting all next siblings elements
while (nextSibling){
    console.log(nextSibling);
    nextSibling = nextSibling.nextElementSibling;

}

// Get the previous siblings
console.log('Get the previous siblings');
preSibling = currentNode.previousElementSibling;

while(preSibling){
 console.log(preSibling);
 preSibling = preSibling.previousElementSibling;
   
}


// to find the first child of parent Element
console.log('To find the first child of parent Element ')
let first = document.querySelector('#first');
console.log(first.firstElementChild);
 


// to find the last child of parent Element
console.log('To find the last child of parent Element ')
let last = document.querySelector('#first');
console.log(last.lastElementChild);


// Get all child elements
console.log('Get all child elements');
let c = document.querySelector('.second');
//node form
let allElements = c.childNodes;
console.log(allElements)
 
//htmlform
console.log(c.children);



