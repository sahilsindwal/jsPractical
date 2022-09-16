let btn = document.querySelector('#btn');
 let para1 = document.querySelector('.para1');
 let para2 = document.querySelector('.para2');
 let para3 = document.querySelector('.para3');
 let para4 = document.querySelector('.para4');
 let para5 = document.querySelector('.para5');
 let para6 = document.querySelector('.para6');
 let para7 = document.querySelector('.para7');
 let para8 = document.querySelector('.para8');
 let para9 = document.querySelector('.para9');
 let para10 = document.querySelector('.para10');



// 1. mousedown Event
btn.addEventListener('mousedown', function(){
    para1.style.color = "red";
});

// 2.  mouseup Event

btn.addEventListener('mouseup', function(){
    para2.style.color = "blue";
});

// 3.  click Event
btn.addEventListener('click', function(){
    para3.style.color = "yellow";
});

// 4.  dblclick Event
btn.addEventListener('dblclick', function(){
    para4.style.backgroundColor = "green";
});

// 5.  mousemove Event

btn.addEventListener('mousemove', function(){
    para5.style.backgroundColor = "red";
});

// 6.  mouseover Event

btn.addEventListener('mouseover', function(){
    para6.style.backgroundColor = "green";
});

// 7.  mouseout Event

btn.addEventListener('mouseout', function(){
    para7.style.backgroundColor = "yellow";
});

// 8.  mouseenter Event

btn.addEventListener('mouseenter', function(){
    para8.style.backgroundColor = "brown";
});

// 9.  mouseleave Event

btn.addEventListener('mouseleave', function(){
    para9.style.backgroundColor = "black";
});

// 10. contextmenu Event

btn.addEventListener('contextmenu', function(){
    alert('hello');
});




