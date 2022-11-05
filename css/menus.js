
let menu = document.getElementById ("menu");
let toggle__open = document.getElementById("toggle__open");
let toggle__close = document.getElementById("toggle__close");

toggle__open.addEventListener("click", toggle__menu);
toggle__close.addEventListener("click", toggle__menu);


function toggle__menu() {
    menu.classList.toggle("show-menu");
}