const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', togglewDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);

function togglewDesktopMenu(){
    //funcion toggle remueve o aniade la clase que se establece
desktopMenu.classList.toggle("inactive");
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}