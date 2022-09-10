//SET css style by using javaScript
let para = document.querySelector('.para');

//method 1
para.style.color ="red"

//method 2
para.setAttribute('style', 'background-color:yellow;');

//method 3        where + is used for concatenate
para.style.cssText += 'border:2px solid red; border-radius: 10px;'

//method 4
// css(para, { background: 'yellow', border-bottom: 'solid 1px red'});


//GET css style by using javaScript

