//Get Text
let element = document.getElementById('first');
let getText = element.textContent;
console.log(getText);

//innerText takes the CSS style into account and returns only human-readable text. 
//<p style="display: none;">first line</p> 

getText = element.innerText;
console.log(getText);

//set text

let p = document.createElement('p');
p.textContent = 'hello this s a text create by textcontent';
element.append(p);
