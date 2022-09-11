let element = document.getElementById('first');
//to check the class lists
console.log(element.className);

//to add the new class (Not Recommended)
element.className += ' second';
console.log(element.className);

//to add the new class (Recommended) 
element.classList.add('new', 'third');

//for loop is used becuz classList return output in collection of object
for( let classes of element.classList){
    console.log(classes);

}

//to Remove the  class of an element
element.classList.remove('third');
console.log('After remove third  class')
console.log(element.className); 

//to Replace the  class of an element
element.classList.replace('second', 'fourth');
console.log('After replaced third  class')
console.log(element.className); 


//to check the class esist or note
let checkClassExist = element.classList.contains('fourth')
console.log(checkClassExist); // Output will in true or flase only

//if class is exist toggle method remove it if not exist then it will add the new class in the element
let togl = element.classList.toggle('fouth');
console.log(togl);