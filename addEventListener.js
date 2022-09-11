
let btn = document.querySelector('#btn');

//DOM Level 0 event handlers
btn.onclick = function(){
    alert('hey');
    console.log(btn.id) //we can access element properties inside the anonymous function
}


// DOM Level 2 event handlers
//Add Event

function Display(){
    btn.classList.toggle('pro');

}

btn.addEventListener('click', Display);

//Events shorter way

btn.addEventListener('click', function(){
    alert('anonymous function')
})


