const loginButton = document.querySelector('.h-btn1');
loginButton.addEventListener('click', function() {});
const header = document.querySelector("header");
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
window.addEventListener("scroll", () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('open');
});
