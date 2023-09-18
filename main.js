const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')


menuEmail.addEventListener('click', togglewDesktopMenu);

function togglewDesktopMenu(){
    //funcion toggle remueve o aniade la clase que se establece
desktopMenu.classList.toggle("inactive");
}