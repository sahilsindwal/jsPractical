let msg = document.querySelector('#input');

msg.addEventListener("keydown", (event) => {
    msg.style.color = "red"
});

msg.addEventListener("keypress", (event) => {
    // handle keypress
    msg.style.color = "blue"

});

msg.addEventListener("keyup", (event) => {
    // handle keyup
    msg.style.color = "yellow"

});



